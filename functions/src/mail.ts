import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'
import * as nanoid from 'nanoid'
import { app } from './flamelinkConfig'
// import seatUpdate from './seatUpdate'
import { timestamp } from './index'

const auth = {
  type: 'OAuth2',
  user: functions.config().mail.address as string,
  clientId: functions.config().mail.client_id as string,
  clientSecret: functions.config().mail.client_secret as string,
  refreshToken: functions.config().mail.refresh_token as string
}

const transport = {
  service: 'gmail',
  auth
}

const transportor = nodemailer.createTransport(transport as any)

export const sendMail = (to: string, subject: string, text: string) => {
  const message = {
    from: functions.config().mail.address as string,
    to,
    subject,
    text
  }

  transportor
    .sendMail(message)
    .then(() => 'ok')
    .catch(e => e)
}

export const temporaryReservation = async (req: any, res: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  const reservationId = nanoid(128)

  const requestBody = req.body

  const {
    movieId = '',
    genre = '',
    theater,
    adult,
    kids,
    date,
    time,
    email
  } = requestBody

  const data = {
    movieId,
    genre,
    email,
    theater,
    adult,
    kids,
    date,
    time,
    orderNumber: reservationId,
    purchasedAt: timestamp
  }

  await app.content
    .add({
      schemaKey: 'paymentInfo',
      entryId: reservationId,
      data
    })
    .then(async () => {
      const text = `https://grady-43e4a.web.app/reservations/${reservationId}`
      sendMail(data.email, 'hogehgoe', text)
      res.send('おけまる')
    })
    .catch((e: any) => e)
}

export interface requestBodyParam {
  movieId?: string
  genre?: string
  email: string
  theater: string
  adult: number
  kids: number
  date: string
  time: string
  orderNumber: string
  sheet: []
}

// interface data {
//   theater: string
//   adult: number
//   kids: number
//   date: string
//   time: string
//   purchasedAt: any
//   paymentMethod: boolean
// }

export const reserved = async (req: any, res: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  const requestBody: requestBodyParam = req.body
  // const {theater, adult, kids, date, time, orderNumber, email} = requestBody
  const { orderNumber, email } = requestBody

  // 予約番号の存在チェック
  const orderNumberCheck = await app.content.get({
    schemaKey: 'paymentInfo',
    entryId: orderNumber,
    fields: []
  })
  if (!orderNumberCheck) {
    res.status(401).send('orderNumberがない')
    return
  }

  // 重複チェックしてから座席の更新
  // await seatUpdate(requestBody).catch(() => {
  //   res.status(401).send('座席の重複')
  // })

  // 予約番号があれば更新してメールを送信
  // const addData: data = {
  //   theater,
  //   adult,
  //   kids,
  //   date,
  //   time,
  //   purchasedAt: timestamp,
  //   paymentMethod: true
  // }
  // await app.content.update({
  //   schemaKey: 'paymentInfo',
  //   entryId: orderNumber,
  //   data: addData
  // })

  sendMail(email, '完了', `予約完了`)
  res.send('おけまる')
}
