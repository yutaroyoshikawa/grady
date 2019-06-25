import * as admin from 'firebase-admin'
import * as flamelink from 'flamelink/app'
import * as adminConfig from './serviceAccountKey.json'
// tslint:disable-next-line: no-import-side-effect
import 'flamelink/content'

export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(adminConfig as any),
  databaseURL: 'https://grady-43e4a.firebaseio.com',
})

export const app = (flamelink as any)({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf', // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Real-time DB vs Cloud Firestore)
  isAdminApp: true
})
