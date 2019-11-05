import * as vuex from 'vuex'
import flamelink from './flamelink'

interface ICommit {
  commit: vuex.Commit
}

export interface IMovie {
  id: string
  title: string
  releaseDate: string
  story: string
  isScreening: boolean
  cover: string
  coverBack: string
  castName: []
  staff: []
}

export type loadStates = 'loading' | 'done' | 'error' | 'none'
export type submitStates = 'submitting' | 'done' | 'error' | 'none'

interface IState {
  movie: IMovie
  loadState: loadStates
  submitState: submitStates
  isOpenDrawer: boolean
  isActiveToast: boolean
}

export interface IReservationForm {
  movieId: string
  theater: string
  date: Date
  time: string
  adult: number
  kids: number
  email: string
}

export const state = (): IState => ({
  movie: {
    id: '',
    title: '',
    releaseDate: '',
    story: '',
    isScreening: false,
    cover: '',
    coverBack: '',
    castName: [],
    staff: []
  },
  loadState: 'none',
  submitState: 'done',
  isOpenDrawer: false,
  isActiveToast: false
})

export const mutations = {
  setLoadState(state: IState, payload: loadStates) {
    state.loadState = payload
  },
  setMovieInfo(state: IState, payload: IMovie) {
    state.movie = payload
  },
  openDrawer(state: IState) {
    state.isOpenDrawer = true
  },
  closeDrawer(state: IState) {
    state.isOpenDrawer = false
  },
  setSubmitState(state: IState, payload: submitStates) {
    state.submitState = payload
  },
  openToastMassage(state: IState){
    state.isActiveToast = true
  },
  closeToastMassage(state: IState){
    state.isActiveToast = false
  }
}

export const actions = {
  async requestGetMovie(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadState', 'loading' as loadStates)
    try {
      const data = await flamelink.content.get({
        schemaKey: 'popularMovieInfo',
        entryId: payload,
        fields: [
          // 'id',
          'title',
          'isScreening',
          'releaseDate',
          'story',
          'cover',
          'coverBack',
          'castName',
          'staff'
        ]
      })

      if (data) {
        dispatch.commit('setMovieInfo', data)
        dispatch.commit('setLoadState', 'done' as loadStates)
      } else {
        try {
          const data = await flamelink.content.get({
            schemaKey: 'nowPlayingMovieInfo',
            entryId: payload,
            fields: [
              'id',
              'title',
              'isScreening',
              'releaseDate',
              'story',
              'cover',
              'coverBack',
              'castName',
              'staff'
            ]
          })

          if (data) {
            dispatch.commit('setMovieInfo', data)
            dispatch.commit('setLoadState', 'done' as loadStates)
          } else {
            dispatch.commit('setLoadState', 'error' as loadStates)
          }
        } catch (e) {
          dispatch.commit('setLoadState', 'error' as loadStates)
          console.error(e)
        }
      }
    } catch (e) {
      dispatch.commit('setLoadState', 'error' as loadStates)
      console.error(e)
    }
  },
  requestOpenDrawer(dispatch: ICommit) {
    dispatch.commit('openDrawer')
  },
  requestCloseDrawer(dispatch: ICommit) {
    dispatch.commit('closeDrawer')
  },
  requestTemporaryReservation(dispatch: ICommit, payload: IReservationForm) {
    dispatch.commit('openToastMassage')
    dispatch.commit('setSubmitState', 'submitting' as submitStates)
    const url =
      'https://asia-northeast1-grady-43e4a.cloudfunctions.net/temporaryReservationMail'
    fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.text())
      .then(data => {
        if (data === 'おけまる') {
          dispatch.commit('closeToastMassage')
          dispatch.commit('setSubmitState', 'done' as submitStates)
          dispatch.commit('closeDrawer')
        } else {
          dispatch.commit('setSubmitState', 'error' as submitStates)
        }
      })
      .catch(() => {
        dispatch.commit('setSubmitState', 'error' as submitStates)
      })
  }
}
