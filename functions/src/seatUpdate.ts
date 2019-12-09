import { db } from './index'

interface requestBodyType {
  movieId?: string
  genre?: string
  theater: string
  adult: number
  kids: number
  date: string
  time: string
  sheets: []
}

const seatUpdate = async (requestBody: requestBodyType) => {
  const {
    theater,
    date,
    time,
    sheets,
    movieId = undefined,
    genre = undefined
  } = requestBody
  const sortDate = date.substr(0, 10)

  let set: 'movieId' | 'genre' = 'movieId'
  let data = movieId
  if (genre) {
    set = 'genre'
    data = genre
  }

  // 現在予約されている座席を取得
  let docId: string = ''
  const nowSheetData: [] = await db
    .collection('theaterInfo')
    .doc(theater)
    .collection(`${sortDate}_${time}`)
    .where(set, '==', data)
    .get()
    .then(response => {
      docId = response.docs[0].id
      return response.docs[0].data().sheet
    })
    .catch(e => e)

  const nowReservedSheet = nowSheetData.filter(
    (value: any) => value.isReserved === true
  )
  const addSheets = sheets.filter((value: any) => value.isReserved === true)

  // 座席の重複確認
  let duplicateCheck = false
  addSheets.forEach((sheet: any) => {
    nowReservedSheet.find((reservedSheet: any) => {
      if (reservedSheet.value === sheet.value) duplicateCheck = true
    })
  })
  if (duplicateCheck) {
    throw new Error()
  }

  // 現在の座席に座席を追加
  const newSheet: any = [...nowSheetData]
  addSheets.forEach((addSheet: any) => {
    const value = addSheet.value
    const index = newSheet.findIndex((v: any) => v.value === value)
    newSheet.splice(index, 1, addSheet)
  })

  // 新しい座席情報に更新
  await db
    .collection('theaterInfo')
    .doc(theater)
    .collection(`${sortDate}_${time}`)
    .doc(docId)
    .set({ sheet: newSheet }, { merge: true })
    .then(() => 'Firestore追加ok')
    .catch(e => e)
}

export default seatUpdate
