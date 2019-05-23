import * as firebase from 'firebase/app'
import * as flamelink from 'flamelink'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'flamelink/settings'
import 'flamelink/content'
import 'flamelink/storage'
import 'flamelink/navigation'
import 'flamelink/users'

const firebaseConfig = {
  apiKey: 'AIzaSyBw3OR1jFj9b9Pp7K57RIIjSeMzNBGNzIs',
  authDomain: 'grady-43e4a.firebaseapp.com',
  databaseURL: 'https://grady-43e4a.firebaseio.com',
  projectId: 'grady-43e4a',
  storageBucket: 'grady-43e4a.appspot.com',
  messagingSenderId: '850547752139'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const app = flamelink({
  firebaseApp,
  dbType: 'cf',
  env: 'production',
  locale: 'en-US',
  precache: true
})

export default app
