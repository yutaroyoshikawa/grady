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
  toastMassage: ""
})

export const mutations =　{
  openToastMassage(state: IState,payload: string) {
    state.isVisibleToast = true,
    state.toastMassage = payload
  },
  closeToastMassage(state: IState) {
    state.isVisibleToast = false
  },
}

export const actions = {
  requestToastMassage(dispatch: ICommit,store: IStore) {
      store.store.subscribe((mutations) => {
        if (mutations.type === 'openDrawer') {
          dispatch.commit('openToastMassage')
          setTimeout(() => {
            dispatch.commit('closeToastMassage')
        }, 5000);
        } else {
          false
        }
      })
    }
  }
}
