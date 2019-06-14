import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as flamelink from 'flamelink/app'
import * as adminConfig from './grady-43e4a-firebase-adminsdk-94m3w-16c816eec7.json'
// tslint:disable-next-line: no-import-side-effect
import 'flamelink/content'

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(adminConfig as any),
  databaseURL: 'https://grady-43e4a.firebaseio.com',
})

const app = (flamelink as any)({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf', // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Real-time DB vs Cloud Firestore)
  isAdminApp: true
})

export const helloWorld = functions.region('asia-northeast1').https.onRequest((request, response) => {
  app.content.get({
    schemaKey: 'movieInfo',
  })
    .then((res:any) => {
      console.log(res)
      response.send(res)
    })
    .catch((e:any) => console.log(`エラー:${e}`))
});
