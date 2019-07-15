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
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

const app = flamelink({
  firebaseApp,
  dbType: 'cf',
  env: 'production',
  locale: 'en-US',
  precache: true
})

export default app