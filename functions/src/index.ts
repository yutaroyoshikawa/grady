import * as functions from 'firebase-functions';

import {app} from "./flamelinkConfig";
import axios from 'axios';

import * as admin from 'firebase-admin';
admin.initializeApp();

import {addMovies} from './algolia'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


// 上映中映画情報を取得
const getNowPlayingMovieInfo = async () => {
  // データ件数の取得
  const totalPage = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${functions.config().movie_api.api_key}&language=ja-JP&region=jp`)
    .then((response: any) => response.data.total_pages)
    .catch((e: any) => console.log(e))

  // 取得したデータを１つの配列にまとめてreturn
  const data: [] = []
  for (let i = 1; i <= totalPage; i++) {
    await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${functions.config().movie_api.api_key}&language=ja-JP&region=jp&page=${i}`)
      .then((response: any) => {
        response.data.results.forEach((result: never) => data.push(result))
      })
      .catch((e: any) => console.log(e))
  }
  return data
};


// 人気の映画情報を取得
const getPopularMovieInfo = async () => {
  // 取得したデータを１つの配列にまとめてreturn
  const data: [] = []
  for (let i = 1; i <= 2; i++) {
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${functions.config().movie_api.api_key}&language=ja-JP&region=jp&page=${i}`)
      .then(response => {
        response.data.results.forEach((result: never) => data.push(result))
      })
      .catch(e => console.log(e))
  }
  return data
};


const sleep = (time: number) => {
  const d1: any = new Date()
  while (true) {
    const d2: any = new Date()
    if (d2 - d1 > time) {
      break
    }
  }
};


// キャストとスタッフ情報を取得
const getCredits = async (movieId: number) => {
  sleep(300)
  console.log(movieId)
  const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${functions.config().movie_api.api_key}`)
    .then(response => {
      return {
        cast: response.data.cast.map((cast: any) => cast.character),
        crew: response.data.crew.map((crew: any) => {
          return {
            name: crew.name,
            job: crew.job
          }
        })
      }
    })
    .catch(e => console.log(e))
  return data
};


// 映画情報を必要な形にしてreturn
const getMovieData = (movies: any) => {
  return Promise.all(movies.map(async (result: any) => {
    // キャストとスタッフ情報を取得
    const Credits: any = await getCredits(result.id)

    // 日本の映画でなければ字幕をtrue
    if (result.original_language !== 'ja') {
      result.original_language = true
    } else {
      result.original_language = false
    }

    return {
      objectID: result.id,
      title: result.original_title,
      story: result.overview,
      genre: result.genre_ids,
      cover: result.poster_path,
      coverBack: result.backdrop_path,
      releaseDate: result.release_date,
      subtitle: result.original_language,
      castName: Credits.cast,
      staff: Credits.crew
    }
  }))
};


// schemaKeyで検索してデータが無ければFlamelinkに追加する
const addFlamelinkData = (datas: any, schemaKey: string) => {
  datas.forEach((data: any) => {
    app.content.get({
      schemaKey,
      entryId: data.movieId
    })
      .then((response: any) => {
        // 無ければFlamelinkに追加する処理
        if (!response) {
          console.log('存在しない')

          app.content.add({
            schemaKey,
            entryId: data.movieId,
            data
          })
            .then(() => console.log('Flamelink追加成功'))
            .catch((e: any) => console.log(`FlamelinkAddエラー:${e}`))
        }
      })
      .catch((e: any) => console.log(`エラー:${e}`))
  })
};


// export const helloWorld = functions.region('asia-northeast1').https.onRequest((request, response) => {
//   app.content.get({
//     schemaKey: 'movieInfo',
//   })
//     .then((res: any) => {
//       console.log(res)
//       response.send(res)
//     })
//     .catch((e: any) => console.log(`エラー:${e}`))
// });

export const nowPlayingMovieData = functions.region('asia-northeast1').https.onRequest(async () => {
  const nowPlayingMovieInfo = await getNowPlayingMovieInfo()
  const movieDatas = await getMovieData(nowPlayingMovieInfo)
  console.log(movieDatas)
  addMovies(movieDatas as any)
  addFlamelinkData(movieDatas, 'nowPlayingMovieInfo')
});

export const popularMovieInfoData = functions.region('asia-northeast1').https.onRequest(async () => {
  const popularMovieInfo = await getPopularMovieInfo()
  const movieDatas = await getMovieData(popularMovieInfo)
  console.log(movieDatas)
  addMovies(movieDatas as any)
  addFlamelinkData(movieDatas, 'popularMovieInfo')
});

export const updateIsScreening = functions.region('asia-northeast1').firestore.document('user/{}').onCreate((snap, context) => {
    console.log('aaaaaaaaaaaaaaa')
  });
