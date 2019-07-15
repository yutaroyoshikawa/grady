import * as vuex from 'vuex'
import flamelink, { firebaseApp } from './flamelink'

type loadStates = 'loading' | 'done' | 'error' | 'none'
type submitStates = 'submitting' | 'done' | 'error' | 'none'

interface ICommit {
  commit: vuex.Commit
}

export interface IReserve {
  movieId: string
  genre: string
  theater: string
  adult: number
  kids: number
  date: Date
  time: string
}

interface IMovie {
  title: string
  screeningYear: number
  cover: string
  coverBack: string
}

interface IState {
  loadState: loadStates
  loadSeatData: loadStates
  isSecret: boolean
  submitState: submitStates
  reservation: IReserve
  movie: IMovie
}

export const state = (): IState => ({
  loadState: 'none',
  loadSeatData: 'none',
  isSecret: false,
  submitState: 'none',
  reservation: {
    movieId: '',
    genre: '',
    theater: '',
    adult: 0,
    kids: 0,
    date: new Date(),
    time: ''
  },
  movie: {
    title: '',
    screeningYear: 0,
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
          'time'
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
    const snapshot = await firebaseApp
      .firestore()
      .collection(`theaterInfo/${payload.theater}/${payload.date}-${payload.time}`)
      .where('movieID', '==', payload.movieId)
      .get()
    const sheets = snapshot.docs[0]
  }
}
