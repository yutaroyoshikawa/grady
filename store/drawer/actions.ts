import { ActionTree } from 'vuex';
import IDrawerState from '~/store/drawer/types'

const actions: ActionTree<IDrawerState, {}> = {
  open: ({ commit }) => (
    commit('open')
  ),
  close: ({ commit }) => (
    commit('close')
  )
}

export default actions
