import * as functions from 'firebase-functions'

import * as algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
  functions.config().algolia.app_id as string,
  functions.config().algolia.api_key as string
).initIndex('movies')

export const addMovies = async (movies: any) => {
  await algolia
    .addObjects(movies)
    .then(() => 'algolia追加完了')
    .catch(e => e)
}

export const updateMovies = (movieInfo: any) => {
  algolia
    .partialUpdateObject(movieInfo)
    .then(() => 'ok')
    .catch(e => e)
}

export const updateAlgolia = (snapshot: any) => {
  const beforeData = snapshot.before.data() as FirebaseFirestore.DocumentData
  const afterData = snapshot.after.data() as FirebaseFirestore.DocumentData

  const data = {
    objectID: beforeData.objectID,
    isScreening: afterData.isScreening
  }

  // isScreeningが変更されていたらalgoliaを更新する
  if (beforeData.isScreening !== afterData.isScreening) {
    updateMovies(data)
  }

  return 0
}
