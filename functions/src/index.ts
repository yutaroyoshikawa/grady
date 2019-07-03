import * as functions from 'firebase-functions';
import * as  nanoid from 'nanoid'
import { sendMail } from './mail'

export const mailTest = functions.region('asia-northeast1')
  .https.onRequest(async (data) => {
    const reservationId = nanoid(128)
    const text = `http://localhost:3000/reservations/${reservationId}`
    await sendMail('kurosawa.developer@gmail.com', 'hogehgoe', text)
})
