import { app } from './flamelinkConfig'
// import seatUpdate from './seatUpdate'
import { timestamp } from './index'
import * as functions from 'firebase-functions'

interface requestBody {
  payment: PaymentRequest
  reservationId: string
  sheets: []
}

interface paymentData {
  purchasedAt: any
  paymentMethod: boolean
}

export interface order {
  movieId?: string
  genre?: string
  theater: string
  adult: number
  kids: number
  date: string
  time: string
}

export const updatePaymentMethod = async (req: functions.Request, res: functions.Response) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  const reservationId = req.body

  console.log(reservationId)

  const data: paymentData = {
    paymentMethod: true,
    purchasedAt: timestamp
  }

  await app.content.update({
    schemaKey: 'paymentInfo',
    entryId: reservationId,
    data: {
      ...data
    }
  })

  res.status(200).send({
    status: 0
  })
}

export const payment = async (req: functions.Request, res: functions.Response) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  const paymentRequest = req.body as requestBody

  console.log("リクエスト")

  console.log(paymentRequest)

  // 予約番号の存在チェック
  const orderCheck: order = await app.content.get({
    schemaKey: 'paymentInfo',
    entryId: paymentRequest.reservationId,
    fields: ['movieId', 'genre', 'theater', 'adult', 'kids', 'date', 'time']
  })
  if (!orderCheck) {
    res.status(401).send('orderNumberがない')
    return
  }

  // const seatUpdateData = {
  //   ...orderCheck,
  //   sheets: paymentRequest.sheets,
  // }
  // await seatUpdate(seatUpdateData).catch(() => {
  //   res.status(401).send('座席の重複')
  //   return
  // })

  res.status(200).send({
    status: 0
  })
}
