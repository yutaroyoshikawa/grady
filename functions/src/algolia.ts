import * as functions from 'firebase-functions'
import * as algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
  functions.config().algolia.app_id as string,
  functions.config().algolia.api_key as string,
).initIndex('movies')

interface IMovie {
  id: number
  castName: undefined | string[]
  cover: string | null
  coverBack: string
  genre: number[]
  releaseDate: string
  story: string
  subtitle: boolean
  title: string
  isScreening: boolean
}

export const addMovies = (movies: IMovie[]) => {
  algolia
    .addObjects(movies)
    .then(() => 'ok')
    .catch(e => e)
}

export const changeInfo = (movieInfo: IMovie) => {
  algolia
    .saveObject(movieInfo)
    .then(() => 'ok')
    .catch(e => e)
}
