import { Module } from 'vuex';
import IDrawerState from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const name = 'drawer'

const state: IDrawerState = {
  drawer: {
    isOpen: false
  }
};

export const drawer: Module<IDrawerState, {}> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
