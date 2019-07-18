import * as vuex from 'vuex'
import flamelink, { firebaseApp } from './flamelink'

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

interface IState {
  loadState: loadStates
  loadSeatData: loadStates
  loadMovieData: loadStates
  isSecret: boolean
  submitState: submitStates
  reservation: IReserve
  movie: IMovie
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
  }
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
  canselSeat(state: IState, payload: string) {
    const index = state.reservation.sheets.findIndex(sheet => sheet.value === payload)
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
      } else if (reservation.genre) {
        dispatch.commit('setIsSecret', true)
      }
      const movie = await flamelink.content.get({
        schemaKey: 'nowPlayingMovieInfo',
        entryId: reservation.movieId,
        fields: [
          'title'
        ]
      })
      dispatch.commit('setMovieTitle', movie.title)
      dispatch.commit('setLoadState', 'done' as loadStates)
    } catch (e) {
      dispatch.commit('setLoadState', 'error' as loadStates)
      console.error(e)
    }
  },
  async requestGetSeatsData(dispatch: ICommit, payload: any) {
    dispatch.commit('setLoadSeatData', 'loading' as loadStates)
    try {
      console.log(payload)
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
      console.error(e)
    }
  },
  requestPayment(dispatch: ICommit, payload: IPaymentRequest) {
    const supportedInstruments = [{
      supportedMethods: ['basic-card'],
      data: {
        supportedNetworks: [
          'visa', 'mastercard', 'amex', 'discover',
          'diners', 'jcb', 'unionpay'
        ]
      }
    }];

    const details = {
      displayItems: [{
        label: `大人 × ${payload.adult}`,
        amount: {
          currency: 'JPY',
          value: (1300 * payload.adult).toString()
        }
      }, {
        label: `小人 × ${payload.kids}`,
        amount: {
          currency: 'JPY',
          value: (900 * payload.kids).toString()
        }
      }],
      total: {
        label: '合計額',
        amount: {
          currency: 'JPY',
          value : (1300 * payload.adult + 900 * payload.kids).toString()
        }
      }
    }

    const request = new PaymentRequest(supportedInstruments, details)

    request
      .show()
      .then(result => {
        const requestReservation = {
          payment: result.toJSON(),
          reservation: {
            id: payload.reservationId,
            sheets: payload.sheets
          } 
        }
        console.log(requestReservation)
        return fetch('https://asia-northeast1-grady-43e4a.cloudfunctions.net/paymentRequest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify(requestReservation)
        })
        .then(response => {
          if (response.status === 200) {
            result.complete('success')
            dispatch.commit('setPaymentState', true)
          } else {
            result.complete('fail')
          }
        })
        .catch(() => (
          result.complete('fail')
        ))
      })
  },
  requestCanselSeat(dispatch: ICommit, payload: string) {
    dispatch.commit('canselSeat', payload)
  },
  async requestGetMovie(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadMovie', 'loading' as loadStates)
    try {
      const data = await flamelink.content.get({
        schemaKey: 'nowPlayingMovieInfo',
        entryId: payload,
        fields: [
          'id',
          'title',
          'releaseDate',
          'cover',
          'coverBack'
        ],
      })
      if (data) {
        dispatch.commit('setMovieInfo', data)
        dispatch.commit('setLoadMovie', 'done' as loadStates)
      } else {
        dispatch.commit('setLoadMovie', 'error' as loadStates)
      }
    } catch (e) {
      dispatch.commit('setLoadMovie', 'error' as loadStates)
      console.error(e)
    }
  }
}
