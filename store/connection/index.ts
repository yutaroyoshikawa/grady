import { Module } from 'vuex';
import IConnectionState from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const name = 'connection'

const state: IConnectionState = {
  connection: {
    errorMessage: '',
    loadState: 'none',
    movies: []
  }
}

export const connection: Module<IConnectionState, {}> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default connection
