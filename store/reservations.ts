import * as vuex from 'vuex'
import flamelink from './flamelink'

type loadStates = 'loading' | 'done' | 'error' | 'none'
type submitStates = 'submitting' | 'done' | 'error' | 'none'

interface ICommit {
  commit: vuex.Commit
}

interface IReserve {
  movieId: string
  title: string
  releaseDate: string
  cover: string
  coverBack: string
}

interface IState {
  loadState: loadStates
  submitState: submitStates
  reservation: IReserve
}

export const state = (): IState => ({
  loadState: 'none',
  submitState: 'none',
  reservation: {
    movieId: '',
    title: '',
    releaseDate: '',
    cover: '',
    coverBack: ''
  }
})

export const mutations = {
  setLoadState(state: IState, payload: loadStates) {
    state.loadState = payload
  },
  setSubmitState(state: IState, payload: submitStates) {
    state.submitState = payload
  },
  setReservationInfo(state: IState, payload: IReserve) {
    state.reservation = payload
  }
}

export const actions = {
  async requestGetReservation(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadState', 'loading' as loadStates)

    try {
      const data = await flamelink.content.get({
        schemaKey: 'paymentInfo',
        entryId: payload
      })
      dispatch.commit('setReservationInfo', data)
    } catch (e) {
      dispatch.commit('setLoadState', 'error' as loadStates)
      console.error(e)
    }
  },
  async requestGetSeatsData(dispatch: ICommit, payload: any) {
    dispatch.commit('')
  }
}
