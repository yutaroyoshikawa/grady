import { GetterTree } from 'vuex'
import IConnectionState, { ILoadState } from '@/store/connection/types'

export const getters: GetterTree<IConnectionState, {}> = {
  loadState(state): ILoadState {
    return state.connection.loadState
  },
  errorMessage(state): string {
    return state.connection.errorMessage
  },
  movies(state): [] {
    return state.connection.movies
  }
}

export default getters
