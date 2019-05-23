import { MutationTree } from 'vuex';
import IConnectionState from '@/store/connection/types'

const mutations: MutationTree<IConnectionState> = {
  requestGetData: (state) => {
    state.connection.loadState = 'loading'
  },
  successGetData: (state, payload: []) => {
    state.connection.loadState = 'success'
    state.connection.movies = payload
  },
  faildGetData: (state, payload: string) => {
    state.connection.loadState = 'error'
    state.connection.errorMessage = payload
  }
}

export default mutations
