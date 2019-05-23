import { ActionTree } from 'vuex'
import IConnectionState from '@/store/connection/types'
import flamelink from '@/store/flamelink'

const actions: ActionTree<IConnectionState, {}> = {
  requestGetData: async ({ commit }) => {
    try {
      commit('requestGetData')
      const data = await flamelink.content.get({
        schemaKey: 'movieInfo',
      })
      commit('successGetData', data)
    } catch (e) {
      commit('faildGetData', e)
    }
  },
}

export default actions
