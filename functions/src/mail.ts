import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'

const auth = {
  type         : 'OAuth2',
  user         : functions.config().mail.address as string,
  clientId     : functions.config().mail.client_id as string,
  clientSecret : functions.config().mail.client_secret as string,
  refreshToken : functions.config().mail.refresh_token as string,
}

const transport = {
  service: 'gmail',
  auth
}

const transportor = nodemailer.createTransport(transport as any)

export const sendMail = (to: string, subject: string, text: string) => {
  const message = {
    from: functions.config().mail.address as string,
    to,
    subject,
    text,
  }

  transportor
    .sendMail(message)
    .then(() => 'ok')
    .catch(e => e)
}
