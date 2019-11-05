import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

import { temporaryReservation, reserved } from './mail'
import { updateAlgolia } from './algolia'
import { nowPlayingMovie, popularMovie } from './movieDatabaseApi'
import { FirestoreAddMovie } from './movieAddAfterWeek'
import { payment } from './payment'

export const timestamp = admin.firestore.FieldValue.serverTimestamp()
export const db = admin.firestore()

// 上映中映画を24時間ごとに取得
export const nowPlayingMovieData = functions
  .region('asia-northeast1')
  .pubsub.schedule('every 24 hours')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    await nowPlayingMovie()
    return 0
  })

// 人気映画を24時間ごとに取得
export const popularMovieData = functions
  .region('asia-northeast1')
  .pubsub.schedule('every 24 hours')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    await popularMovie()
    return 0
  })

export const updateAlgoliaData = functions
  .region('asia-northeast1')
  .firestore.document('/fl_content/{Id}')
  .onUpdate(snapshot => {
    updateAlgolia(snapshot)
  })

// 仮予約メールの送信
export const temporaryReservationMail = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    temporaryReservation(req, res)
      .then(() => console.log())
      .catch(() => console.log())
  })

// 本予約メールの送信
export const reservedMail = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    reserved(req, res)
      .then(() => console.log())
      .catch(() => console.log())
  })

export const FirestoreAddMovieData = functions
  .region('asia-northeast1')
  .pubsub.schedule('every 24 hours')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    await FirestoreAddMovie()
    return 0
  })

// export const test2 = functions
//   .region('asia-northeast1')
//   .https.onRequest(async (req, res) => {
//     await nowPlayingMovie()
//     res.status(200).send('ok')
//   })
//
// export const test3 = functions
//   .region('asia-northeast1')
//   .https.onRequest(async (req, res) => {
//     await popularMovie()
//     res.status(200).send('ok')
//   })

export const paymentRequest = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    await payment(req, res)
  })
