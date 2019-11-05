import * as moment from 'moment'
import { app } from './flamelinkConfig'
import { db } from './index'

const theaters = ['ほげほげ映画館', 'ぴよぴよ映画館', 'ふがふが映画館']
type TheaterName = 'ほげほげ映画館' | 'ぴよぴよ映画館' | 'ふがふが映画館'

const date = moment()
  .add(7, 'days')
  .format('YYYY-MM-DD')

const dateTimes = [`${date}_12:00-14:00`, `${date}_15:00-17:00`]

const sheet = [
  {
    value: 'A1',
    isReserved: false
  },
  {
    value: 'A2',
    isReserved: false
  },
  {
    value: 'A3',
    isReserved: false
  },
  {
    value: 'A4',
    isReserved: false
  },
  {
    value: 'B1',
    isReserved: false
  },
  {
    value: 'B2',
    isReserved: false
  },
  {
    value: 'B3',
    isReserved: false
  },
  {
    value: 'B4',
    isReserved: false
  },
  {
    value: 'B5',
    isReserved: false
  },
  {
    value: 'B6',
    isReserved: false
  },
  {
    value: 'C1',
    isReserved: false
  },
  {
    value: 'C2',
    isReserved: false
  },
  {
    value: 'C3',
    isReserved: false
  },
  {
    value: 'C4',
    isReserved: false
  },
  {
    value: 'C5',
    isReserved: false
  },
  {
    value: 'C6',
    isReserved: false
  },
  {
    value: 'D1',
    isReserved: false
  },
  {
    value: 'D2',
    isReserved: false
  },
  {
    value: 'D3',
    isReserved: false
  },
  {
    value: 'D4',
    isReserved: false
  },
  {
    value: 'D5',
    isReserved: false
  },
  {
    value: 'D6',
    isReserved: false
  },
  {
    value: 'E1',
    isReserved: false
  },
  {
    value: 'E2',
    isReserved: false
  },
  {
    value: 'E3',
    isReserved: false
  },
  {
    value: 'E4',
    isReserved: false
  },
  {
    value: 'E5',
    isReserved: false
  },
  {
    value: 'E6',
    isReserved: false
  },
  {
    value: 'F1',
    isReserved: false
  },
  {
    value: 'F2',
    isReserved: false
  },
  {
    value: 'F3',
    isReserved: false
  },
  {
    value: 'F4',
    isReserved: false
  },
  {
    value: 'F5',
    isReserved: false
  },
  {
    value: 'F6',
    isReserved: false
  }
]

const nowPlayingMovie = async () => {
  const nowPlayingMovieData = await app.content.get({
    schemaKey: 'nowPlayingMovieInfo',
    fields: ['objectID', 'isScreening']
  })

  const values = Object.values(nowPlayingMovieData).filter(value => value)
  const isScreening = values.filter((value: any) => value.isScreening === true)
  return isScreening.map((value: any) => value.objectID)
}

const secretMovie = async () => {
  const secretMovieData = await app.content.get({
    schemaKey: 'secretMovieInfo',
    fields: ['genre'],
    populate: ['genre']
  })
  const values = Object.values(secretMovieData).filter(value => value)
  return values.map((value: any) => value.genre.genre)
}
//
// const nowPlayingMovieAdd = (theaterName: theaterName, dateTime: string, movieId: string, theaterNumber: number) => {
//   const data = {
//     movieId,
//     sheet: [],
//   }
//   db.collection('theaterInfo')
//     .doc(theaterName)
//     .collection(dateTime)
//     .doc(`theater${theaterNumber}`)
//     .set(data)
//     .then(() => 'ok')
//     .catch(e => console.log(e))
// }

interface Interface {
  theaterName: TheaterName
  dateTime: string
  nowPlayingSecretMovieGenre?: any
  nowPlayingMovieId?: any
}

const movieAdd = (data: Interface) => {
  const {
    theaterName,
    dateTime,
    nowPlayingSecretMovieGenre,
    nowPlayingMovieId
  } = data
  // let theaterNumber = 1

  const dataAdd = async (set: object) => {
    // console.log(number);
    await db
      .collection('theaterInfo')
      .doc(theaterName)
      .collection(dateTime)
      .doc()
      .set(set)
      .then(() => '追加完了')
      .catch(e => e)
  }

  nowPlayingSecretMovieGenre.forEach(async (id: string) => {
    // console.log(theaterNumber);
    const set = {
      genre: id,
      sheet
    }
    await dataAdd(set)
    // theaterNumber += 1
  })

  nowPlayingMovieId.forEach(async (id: string) => {
    // console.log(theaterNumber);

    const set = {
      movieId: id,
      sheet
    }
    await dataAdd(set)
    // theaterNumber += 1
  })
}

export const FirestoreAddMovie = async () => {
  const nowPlayingMovieId = await nowPlayingMovie()
  const nowPlayingSecretMovieGenre = await secretMovie()

  // 時間の数だけ回す
  const forDateTime = (theaterName: TheaterName) => {
    dateTimes.forEach((dateTime: string) => {
      movieAdd({
        nowPlayingMovieId,
        nowPlayingSecretMovieGenre,
        theaterName,
        dateTime
      })
    })
  }

  // 映画館の数だけ回す
  theaters.forEach(theater => forDateTime(theater as TheaterName))
}
