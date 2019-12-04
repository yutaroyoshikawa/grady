import * as vuex from 'vuex'

interface ICommit {
  commit: vuex.Commit
}

interface IStore {
  store: vuex.Store<any>
}

interface IState {
  isVisibleToast: boolean
  toastMassage: string
}

export const state = (): IState => ({
  isVisibleToast: false,
  toastMassage: ''
})

export const mutations = {
  openToastMassage(state: IState, payload: string) {
    state.isVisibleToast = true
    state.toastMassage = payload
  },
  closeToastMassage(state: IState) {
    state.isVisibleToast = false
  }
}

export const actions = {
  showToastMassage(dispatch: ICommit,payload: string) {
    dispatch.commit('openToastMassage', payload)
    setTimeout(() => {
      dispatch.commit('closeToastMassage', payload)
    }, 3000)
  }
}
