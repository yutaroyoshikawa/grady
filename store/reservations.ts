import * as vuex from 'vuex'
import flamelink, { firebaseApp } from './flamelink'

let unsubscribe: any = null

type loadStates = 'loading' | 'done' | 'error' | 'none'
type submitStates = 'submitting' | 'done' | 'error' | 'none'

interface ISheet {
  isReserved: boolean
  value: string
}

interface ICommit {
  commit: vuex.Commit
}

interface IPaymentRequest {
  reservationId: string
  adult: number
  kids: number
  sheets: ISheet[]
}

interface ChatPayload {
  chatText: string,
  genre: string
}

export interface IReserve {
  movieId: string
  genre: string
  theater: string
  adult: number
  kids: number
  date: Date
  time: string
  sheets: ISheet[]
  paymentMethod: boolean
}

export interface IMovie {
  title: string
  releaseDate: Date
  cover: string
  coverBack: string
}

export interface IHints {
  hint1: string
  hint2: string
  hint3: string
}

interface IState {
  loadState: loadStates
  loadSeatData: loadStates
  loadMovieData: loadStates
  isSecret: boolean
  submitState: submitStates
  reservation: IReserve
  movie: IMovie
  hints: IHints
  chats: any
}

export const state = (): IState => ({
  loadState: 'loading',
  loadSeatData: 'none',
  loadMovieData: 'loading',
  isSecret: false,
  submitState: 'none',
  reservation: {
    movieId: '',
    genre: '',
    theater: '',
    adult: 0,
    kids: 0,
    date: new Date(),
    time: '',
    sheets: [],
    paymentMethod: false
  },
  movie: {
    title: '',
    releaseDate: new Date(),
    cover: '',
    coverBack: ''
  },
  hints: {
    hint1: '',
    hint2: '',
    hint3: ''
  },
  chats: []
})

export const mutations = {
  setLoadState(state: IState, payload: loadStates) {
    state.loadState = payload
  },
  setLoadSeatData(state: IState, payload: loadStates) {
    state.loadSeatData = payload
  },
  setSubmitState(state: IState, payload: submitStates) {
    state.submitState = payload
  },
  setReservationInfo(state: IState, payload: IReserve) {
    state.reservation = payload
  },
  setMovieTitle(state: IState, payload: string) {
    state.movie.title = payload
  },
  setIsSecret(state: IState, payload: boolean) {
    state.isSecret = payload
  },
  setSheets(state: IState, payload: any) {
    state.reservation.sheets = payload
  },
  cancelSeat(state: IState, payload: string) {
    const index = state.reservation.sheets.findIndex(
      sheet => sheet.value === payload
    )
    state.reservation.sheets[index].isReserved = false
  },
  setPaymentState(state: IState, payload: boolean) {
    state.reservation.paymentMethod = payload
  },
  setLoadMovie(state: IState, payload: loadStates) {
    state.loadMovieData = payload
  },
  setMovieInfo(state: IState, payload: IMovie) {
    state.movie = payload
  },
  setHints(state: IState, payload: IHints) {
    state.hints = payload
  },
  chatsData(state: IState, chats: any) {
    const chatsData = chats.map((chat: any) => chat.data())
    // commitされた値を受け取る
    state.chats = chatsData
  }
}

export const actions = {
  async requestGetReservation(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadState', 'loading' as loadStates)

    try {
      const reservation = await flamelink.content.get({
        schemaKey: 'paymentInfo',
        entryId: payload,
        fields: [
          'movieId',
          'genre',
          'theater',
          'adult',
          'kids',
          'date',
          'time',
          'paymentMethod'
        ]
      })
      dispatch.commit('setReservationInfo', reservation)
      if (reservation.movieId) {
        dispatch.commit('setIsSecret', false)
        const movie = await flamelink.content.get({
          schemaKey: 'nowPlayingMovieInfo',
          entryId: reservation.movieId,
          fields: ['title']
        })
        dispatch.commit('setMovieTitle', movie.title)
      } else if (reservation.genre) {
        dispatch.commit('setIsSecret', true)
      }
      dispatch.commit('setLoadState', 'done' as loadStates)
    } catch (e) {
      dispatch.commit('setLoadState', 'error' as loadStates)
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  async requestGetSeatsData(dispatch: ICommit, payload: any) {
    dispatch.commit('setLoadSeatData', 'loading' as loadStates)
    try {
      const snapshot = await firebaseApp
        .firestore()
        .collection('theaterInfo')
        .doc(payload.theater)
        .collection(`${payload.date}_${payload.time}`)
        .where('movieId', '==', payload.movieId)
        .get()
      dispatch.commit('setSheets', snapshot.docs[0].data().sheet)
      dispatch.commit('setLoadSeatData', 'done' as loadStates)
    } catch (e) {
      dispatch.commit('setLoadSeatData', 'error' as loadStates)
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  requestPayment(dispatch: ICommit, payload: IPaymentRequest) {
    const supportedInstruments = [
      {
        supportedMethods: ['basic-card'],
        data: {
          supportedNetworks: [
            'visa',
            'mastercard',
            'amex',
            'discover',
            'diners',
            'jcb',
            'unionpay'
          ]
        }
      }
    ]

    const details = {
      displayItems: [
        {
          label: `大人 × ${payload.adult}`,
          amount: {
            currency: 'JPY',
            value: (1300 * payload.adult).toString()
          }
        },
        {
          label: `小人 × ${payload.kids}`,
          amount: {
            currency: 'JPY',
            value: (900 * payload.kids).toString()
          }
        }
      ],
      total: {
        label: '合計額',
        amount: {
          currency: 'JPY',
          value: (1300 * payload.adult + 900 * payload.kids).toString()
        }
      }
    }

    const request = new PaymentRequest(supportedInstruments, details)

    request.show().then(result => {
      return fetch(
        'https://asia-northeast1-grady-43e4a.cloudfunctions.net/paymentRequest',
        {
          method: 'post',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(result.toJSON())
        }
      )
        .then(response => {
          if (response.status === 200) {
            result.complete('success')
            dispatch.commit('setPaymentState', true)
          } else {
            result.complete('fail')
          }
        })
        .catch(() => result.complete('fail'))
    })
  },
  requestCancelSeat(dispatch: ICommit, payload: string) {
    dispatch.commit('cancelSeat', payload)
  },
  async requestGetMovie(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadMovie', 'loading' as loadStates)
    try {
      const data = await flamelink.content.get({
        schemaKey: 'nowPlayingMovieInfo',
        entryId: payload,
        fields: ['id', 'title', 'releaseDate', 'cover', 'coverBack']
      })
      if (data) {
        dispatch.commit('setMovieInfo', data)
        dispatch.commit('setLoadMovie', 'done' as loadStates)
      } else {
        dispatch.commit('setLoadMovie', 'error' as loadStates)
      }
    } catch (e) {
      dispatch.commit('setLoadMovie', 'error' as loadStates)
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  requestListenData(dispatch: ICommit, payload: string) {
    // 通信初期化
    if (unsubscribe) {
      unsubscribe()
      // eslint-disable-next-line no-console
      console.log('hoge')
      unsubscribe = null
    } else {
      // eslint-disable-next-line no-console
      console.log('foo')
    }
    // firestoreからdataを受け取る
    unsubscribe = firebaseApp
      .firestore()
      .collection('chats')
      // payloadのgenre
      .doc(payload)
      .collection('chats')
      .orderBy('postedAt', 'desc')
      .onSnapshot(doc => {
        const chats = doc.docs
        dispatch.commit('chatsData', chats)
      })
  },
  setChatData(dispatch: ICommit, payload: ChatPayload) {
    // // 通信初期化
    // if (unsubscribe) {
    //   unsubscribe()
    //   unsubscribe = null
    // } else {
    //   // eslint-disable-next-line no-console
    //   console.log('foo')
    // }
    // firestoreからdataを受け取る
    firebaseApp
      .firestore()
      .collection('chats')
      .doc(payload.genre)
      .collection('chats')
      .add({
        content: payload.chatText,
        postedAt: new Date()
      })
  },
  async requestHints(dispatch: ICommit, genre: string) {
    const hint = await flamelink.content.getByField({
      schemaKey: 'secretMovieInfo',
      field: 'genre',
      value: genre
    })
    const hints = hint[Object.keys(hint)[0]]
    dispatch.commit('setHints', {
      hint1: hints.hint1,
      hint2: hints.hint2,
      hint3: hints.hint3
    } as IHints)
  },
  stopListenData() {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }
}
