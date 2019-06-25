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

export const addMovies = (movies: any) => {
  console.log(`algoliahogehoge${movies}`)
  algolia
    .addObjects(movies)
    .then(() => 'ok')
    .catch(e => e)
}

export const changeInfo = (movieInfo: any) => {
  algolia
    .saveObject(movieInfo)
    .then(() => 'ok')
    .catch(e => e)
}
