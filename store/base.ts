import * as vuex from 'vuex'

interface ICommit {
  commit: vuex.Commit
}

interface IState {
  isVisibleLoading: boolean
}

export const state = (): IState => ({
  isVisibleLoading: false
})

export const mutations = {
  openLoadingAnimation(state: IState) {
    state.isVisibleLoading = true
  },
  closeLoadingAnimation(state: IState) {
    state.isVisibleLoading = false
  }
}

export const actions = {
  openLoadingAction(dispatch: ICommit) {
    dispatch.commit('openLoadingAnimation')
  },
  closeLoadingAction(dispatch: ICommit) {
    dispatch.commit('closeLoadingAnimation')
  }
}