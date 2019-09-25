import axios from 'axios'
import * as functions from 'firebase-functions'
import { app } from './flamelinkConfig'

import sleep from './sleep'
import { addMovies } from './algolia'

// 上映中映画情報を取得
const getNowPlayingMovieInfo = async () => {
  const totalPage = await getDataPage()

  // 取得したデータを１つの配列にまとめてreturn
  const data: [] = []
  for (let i = 1; i <= totalPage; i++) {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          functions.config().movie_api.api_key
        }&language=ja-JP&region=jp&page=${i}`
      )
      .then((response: any) => {
        response.data.results.forEach((result: never) => data.push(result))
      })
      .catch((e: any) => e)
  }
  return data
}

// 公開中映画のデータ件数を取得
const getDataPage = async () => {
  const dataPage = await axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        functions.config().movie_api.api_key
      }&language=ja-JP&region=jp`
    )
    .then((response: any) => response.data.total_pages)
    .catch((e: any) => e)
  return dataPage
}

// 人気の映画情報を取得
const getPopularMovieInfo = async () => {
  // 取得したデータを１つの配列にまとめてreturn
  const data: [] = []
  for (let i = 1; i <= 2; i++) {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          functions.config().movie_api.api_key
        }&language=ja-JP&region=jp&page=${i}`
      )
      .then(response => {
        response.data.results.forEach((result: never) => data.push(result))
      })
      .catch(e => e)
  }
  return data
}

// キャストとスタッフ情報を取得
const getCredits = async (movieId: number) => {
  sleep(300)
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
        functions.config().movie_api.api_key
      }`
    )
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
    .catch(e => e)
  return data
}

// 映画情報を必要な形にしてreturn
const getMovieData = (movies: any) => {
  return Promise.all(
    movies.map(async (result: any) => {
      // キャストとスタッフ情報を取得
      const Credits: any = await getCredits(result.id)

      // キャストとスタッフ情報の数制限
      // Credits.cast.length = 10
      // Credits.crew.length = 10

      // 日本の映画でなければ字幕をtrue
      if (result.original_language !== 'ja') {
        result.original_language = true
      } else {
        result.original_language = false
      }

      return {
        objectID: String(result.id),
        title: result.original_title,
        story: result.overview,
        _tags: result.genre_ids.map(String),
        cover: result.poster_path,
        coverBack: result.backdrop_path,
        releaseDate: result.release_date,
        subtitle: result.original_language,
        castName: Credits.cast,
        staff: Credits.crew,
        isScreening: false
      }
    })
  )
}

type schemaKey = 'nowPlayingMovieInfo' | 'popularMovieInfo'

// schemaKeyで検索してデータが無ければFlamelinkに追加する
const addFlamelinkData = (datas: any, schemaKey: schemaKey) => {
  datas.forEach(async (data: any) => {
    const flemelinkData = await app.content.get({
      schemaKey,
      entryId: data.objectID
    })

    if (flemelinkData) {
      return
    }

    // 存在しない映画ならデータを追加
    await app.content
      .add({
        schemaKey,
        entryId: data.objectID,
        data
      })
      .then(() => 'Flamelink追加成功')
      .catch((e: any) => `FlamelinkAddエラー:${e}`)
  })
}

export const nowPlayingMovie = async () => {
  const nowPlayingMovieInfo = await getNowPlayingMovieInfo()
  const movieDatas = await getMovieData(nowPlayingMovieInfo)

  await addFlamelinkData(movieDatas, 'nowPlayingMovieInfo')
  await addMovies(movieDatas)
}

export const popularMovie = async () => {
  const popularMovieInfo = await getPopularMovieInfo()
  const movieDatas = await getMovieData(popularMovieInfo)

  await addFlamelinkData(movieDatas, 'popularMovieInfo')
  await addMovies(movieDatas)
}
