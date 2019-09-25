import { app } from './flamelinkConfig'
import seatUpdate from './seatUpdate'
import { timestamp } from './index'

interface requestBody {
  id?: string
  sheets: []
}

interface data {
  purchasedAt: any
  paymentMethod: boolean
}

export interface orderCheck {
  movieId?: string
  genre?: string
  theater: string
  adult: number
  kids: number
  date: string
  time: string
}

export const payment = async (req: any, res: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  const { id, sheets }: requestBody = req.body.reservation

  // 予約番号の存在チェック
  const orderCheck: orderCheck = await app.content.get({
    schemaKey: 'paymentInfo',
    entryId: id,
    fields: ['movieId', 'genre', 'theater', 'adult', 'kids', 'date', 'time']
  })
  if (!orderCheck) {
    res.status(401).send('orderNumberがない')
    return
  }

  const seatUpdateData = {
    ...orderCheck,
    sheets
  }
  await seatUpdate(seatUpdateData).catch(() => {
    res.status(401).send('座席の重複')
  })

  // paymentMethodの更新処理
  const addData: data = {
    purchasedAt: timestamp,
    paymentMethod: true
  }
  await app.content.update({
    schemaKey: 'paymentInfo',
    entryId: id,
    data: addData
  })

  res.status(200).send({
    status: 0
  })
}
