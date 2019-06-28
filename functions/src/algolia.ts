import * as functions from 'firebase-functions';

import * as algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
  functions.config().algolia.app_id as string,
  functions.config().algolia.api_key as string,
).initIndex('movies')

// interface IMovie {
//   // id: number
//   objectID: number
//   castName: undefined | string[]
//   cover: string | null
//   coverBack: string |null
//   genre: number[]
//   releaseDate: string
//   story: string
//   subtitle: boolean
//   title: string
//   staff: undefined | string[]
//   // isScreening: boolean
// }

export const　addMovies = async (movies: any) => {
  await algolia
    .addObjects(movies)
    .then(() => console.log('algolia追加完了'))
    .catch(e => e)
}

export const changeInfo = (movieInfo: any) => {
  algolia
    .saveObject(movieInfo)
    .then(() => 'ok')
    .catch(e => e)
}

export const updateMovies = (movieInfo: any) => {
  console.log('algolia更新完了')
  algolia
    .partialUpdateObject(movieInfo)
    .then(() => 'ok')
    .catch(e => e)
}
