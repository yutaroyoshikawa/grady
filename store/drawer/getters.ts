import { GetterTree } from 'vuex';
import IDrawerState from '~/store/drawer/types'

export const getters: GetterTree<IDrawerState, {}> = {
  isOpen(state): boolean {
      return state.drawer.isOpen;
  }
}

export default getters
