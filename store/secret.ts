import * as vuex from 'vuex'
import flamelink from './flamelink'
import { firebaseApp } from '@/store/flamelink'

interface ICommit {
  commit: vuex.Commit
}

export interface IMovie {
  genre: string
}

export type loadStates = 'loading' | 'done' | 'error' | 'none'
export type submitStates = 'submitting' | 'done' | 'error' | 'none'

let unsubscribe: any = null

interface IState {
  movie: IMovie
  loadState: loadStates
  submitState: submitStates
  isOpenDrawer: boolean
  chats: any
  isActiveToast: boolean
}

export interface IReservationForm {
  genre: string
  theater: string
  date: Date
  time: string
  adult: number
  kids: number
  email: string
}

export const state = (): IState => ({
  movie: {
    genre: ''
  },
  loadState: 'none',
  submitState: 'done',
  isOpenDrawer: false,
  chats: [],
  isActiveToast: false
})

export const mutations = {
  setLoadState(state: IState, payload: loadStates) {
    state.loadState = payload
  },
  setMovieInfo(state: IState, payload: IMovie) {
    state.movie = payload
  },
  openDrawer(state: IState) {
    state.isOpenDrawer = true
  },
  closeDrawer(state: IState) {
    state.isOpenDrawer = false
  },
  setSubmitState(state: IState, payload: submitStates) {
    state.submitState = payload
  },
  chatsData(state: IState, chats: any) {
    const chatsData = chats.map((chat: any) => chat.data())
    // commitされた値を受け取る
    state.chats = chatsData
  },
  openToastMassage(state: IState){
    state.isActiveToast = true
  },
  closeToastMassage(state: IState){
    state.isActiveToast = false
  }
}

export const actions = {
  async requestGetMovie(dispatch: ICommit, payload: string) {
    dispatch.commit('setLoadState', 'loading' as loadStates)
    try {
      const data = await flamelink.content.get({
        schemaKey: 'popularMovieInfo',
        entryId: payload,
        fields: ['genre']
      })

      if (data) {
        dispatch.commit('setMovieInfo', data)
        dispatch.commit('setLoadState', 'done' as loadStates)
      } else {
        try {
          const data = await flamelink.content.get({
            schemaKey: 'nowPlayingMovieInfo',
            entryId: payload,
            fields: ['genre']
          })

          if (data) {
            dispatch.commit('setMovieInfo', data)
            dispatch.commit('setLoadState', 'done' as loadStates)
          } else {
            dispatch.commit('setLoadState', 'error' as loadStates)
          }
        } catch (e) {
          dispatch.commit('setLoadState', 'error' as loadStates)
          // eslint-disable-next-line no-console
          console.error(e)
        }
      }
    } catch (e) {
      dispatch.commit('setLoadState', 'error' as loadStates)
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  requestOpenDrawer(dispatch: ICommit) {
    dispatch.commit('openDrawer')
  },
  requestCloseDrawer(dispatch: ICommit) {
    dispatch.commit('closeDrawer')
  },
  requestTemporaryReservation(dispatch: ICommit, payload: IReservationForm) {
    dispatch.commit('openToastMassage')
    dispatch.commit('setSubmitState', 'submitting' as submitStates)
    const url =
      'https://asia-northeast1-grady-43e4a.cloudfunctions.net/temporaryReservationMail'
    fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.text())
      .then(data => {
        if (data === 'おけまる') {
          dispatch.commit('closeToastMassage')
          dispatch.commit('setSubmitState', 'done' as submitStates)
          dispatch.commit('closeDrawer')
          // eslint-disable-next-line no-console
          console.log(data)
        } else {
          dispatch.commit('setSubmitState', 'error' as submitStates)
          // eslint-disable-next-line no-console
          console.log('hoge')
        }
      })
      .catch(() => {
        dispatch.commit('setSubmitState', 'error' as submitStates)
        // eslint-disable-next-line no-console
        console.log('hogehoge')
      })
  },
  requestListenData(dispatch: ICommit, payload: string) {
    // 通信初期化
    if (unsubscribe) {
      unsubscribe()
      // eslint-disable-next-line no-console
      console.log('hoge')
      unsubscribe = null
    } else {
      // eslint-disable-next-line no-console
      console.log('foo')
    }
    // firestoreからdataを受け取る
    unsubscribe = firebaseApp
      .firestore()
      .collection('chats')
      // payloadのgenre
      .doc(payload)
      .collection('chats')
      .orderBy('postedAt', 'desc')
      .onSnapshot(doc => {
        const chats = doc.docs
        // mutationにcommit
        dispatch.commit('chatsData', chats)
      })
  },
  stopListenData() {
    if (unsubscribe) {
      unsubscribe()

      unsubscribe = null
    }
  }
}
