import * as vuex from 'vuex'

interface ICommit {
  commit: vuex.Commit
}

interface IState {
  isVisibleToast: boolean
  toastMassage: string
  isVisibleLoading: boolean
}

export const state = (): IState => ({
  isVisibleToast: false,
  toastMassage: '',
  isVisibleLoading: false
})

export const mutations = {
  openToastMassage(state: IState, payload: string) {
    state.isVisibleToast = true
    state.toastMassage = payload
  },
  closeToastMassage(state: IState) {
    state.isVisibleToast = false
  },
  openLoadingAnimation(state: IState) {
    state.isVisibleLoading = true
  },
  closeLoadingAnimation(state: IState) {
    state.isVisibleLoading = false
  }
}

export const actions = {
  openAndCloseMassage(dispatch: ICommit,payload: string) {
    dispatch.commit('openToastMassage', payload)
    setTimeout(() => {
      dispatch.commit('closeToastMassage', payload)
    }, 3000)
  },
  openLoadingAction(dispatch: ICommit) {
    dispatch.commit('openLoadingAnimation')
  },
  closeLoadingAction(dispatch: ICommit) {
    dispatch.commit('closeLoadingAnimation')
  }
}
