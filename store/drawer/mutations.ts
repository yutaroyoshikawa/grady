import { MutationTree } from 'vuex';
import IDrawerState from '~/store/drawer/types'

const mutations: MutationTree<IDrawerState> = {
  open: (state) => {
    state.drawer.isOpen = true
  },
  close: (state) => {
    state.drawer.isOpen = false
  }
}

export default mutations
