import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'
import * as nanoid from 'nanoid'
import { app } from './flamelinkConfig'
// import seatUpdate from './seatUpdate'
import { timestamp } from './index'

const auth = {
  type: 'OAuth2',
  user: functions.config().mail.address as string,
  clientId: functions.config().mail.client_id as string,
  clientSecret: functions.config().mail.client_secret as string,
  refreshToken: functions.config().mail.refresh_token as string
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
    text
  }

  transportor
    .sendMail(message)
    .then(() => 'ok')
    .catch(e => e)
}

export const temporaryReservation = async (req: any, res: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  const reservationId = nanoid(128)

  const requestBody = req.body

  const {
    movieId = '',
    genre = '',
    theater,
    adult,
    kids,
    date,
    time,
    email
  } = requestBody

  const data = {
    movieId,
    genre,
    email,
    theater,
    adult,
    kids,
    date,
    time,
    orderNumber: reservationId,
    purchasedAt: timestamp
  }

  await app.content
    .add({
      schemaKey: 'paymentInfo',
      entryId: reservationId,
      data
    })
    .then(async () => {
      const url = `http://localhost:3000/reservations/${reservationId}`
      const text = `<!DOCTYPE html>
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
      >
        <head>
          <title> </title>
          <!--[if !mso]><!-- -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <!--<![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style type="text/css">
            #outlook a {
              padding: 0;
            }
            .ReadMsgBody {
              width: 100%;
            }
            .ExternalClass {
              width: 100%;
            }
            .ExternalClass * {
              line-height: 100%;
            }
            body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
            }
            p {
              display: block;
              margin: 13px 0;
            }
          </style>
          <!--[if !mso]><!-->
          <style type="text/css">
            @media only screen and (max-width: 480px) {
              @-ms-viewport {
                width: 320px;
              }
              @viewport {
                width: 320px;
              }
            }
          </style>
          <!--<![endif]-->
          <!--[if mso]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
          <!--[if lte mso 11]>
            <style type="text/css">
              .outlook-group-fix {
                width: 100% !important;
              }
            </style>
          <![endif]-->
      
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700"
            rel="stylesheet"
            type="text/css"
          />
          <style type="text/css">
            @import url(
              https://fonts.googleapis.com/css?family=Open+Sans:300,
              400,
              500,
              700
            );
          </style>
          <!--<![endif]-->
      
          <style type="text/css">
            @media only screen and (min-width: 480px) {
              .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
            }
          </style>
      
          <style type="text/css"></style>
        </head>
        <body style="background-color:#ffffff;">
          <div style="background-color:#ffffff;">
            <!--[if mso | IE]>
                    <table
                       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                    >
                      <tr>
                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
      
            <div
              style="background:#377793;background-color:#377793;Margin:0px auto;max-width:600px;"
            >
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="background:#377793;background-color:#377793;width:100%;"
              >
                <tbody>
                  <tr>
                    <td
                      style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0;text-align:center;vertical-align:top;"
                    >
                      <!--[if mso | IE]>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                              
                      <tr>
                    
                          <td
                             class="" style="vertical-align:top;width:600px;"
                          >
                        <![endif]-->
      
                      <div
                        class="mj-column-per-100 outlook-group-fix"
                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="vertical-align:top;"
                          width="100%"
                        >
                          <tr>
                            <td
                              align="left"
                              style="font-size:0px;padding:10px 25px;padding-top:50;padding-right:25px;padding-bottom:30px;padding-left:25px;word-break:break-word;"
                            >
                              <div
                                style="font-family:open Sans Helvetica, Arial, sans-serif;font-size:45px;font-weight:bold;line-height:1;text-align:left;color:#ffffff;"
                              >
                                Grady
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
      
                      <!--[if mso | IE]>
                          </td>
                        
                      </tr>
                    
                                </table>
                              <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <!--[if mso | IE]>
                        </td>
                      </tr>
                    </table>
                    
                    <table
                       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                    >
                      <tr>
                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
      
            <div
              style="background:#377793;background-color:#377793;Margin:0px auto;max-width:600px;"
            >
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="background:#377793;background-color:#377793;width:100%;"
              >
                <tbody>
                  <tr>
                    <td
                      style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20;text-align:center;vertical-align:top;"
                    >
                      <!--[if mso | IE]>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                              
                      <tr>
                    
                          <td
                             class="" style="vertical-align:middle;width:600px;"
                          >
                        <![endif]-->
      
                      <div
                        class="mj-column-per-100 outlook-group-fix"
                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="vertical-align:middle;"
                          width="100%"
                        >
                          <tr>
                            <td
                              align="left"
                              style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;"
                            >
                              <div
                                style="font-family:open Sans Helvetica, Arial, sans-serif;font-size:22px;line-height:1;text-align:left;color:#ffffff;"
                              >
                                <br />
                                映画チケットの仮予約が完了しました！
                              </div>
                            </td>
                          </tr>
      
                          <tr>
                            <td
                              align="left"
                              style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;"
                            >
                              <div
                                style="font-family:open Sans Helvetica, Arial, sans-serif;font-size:15px;line-height:1;text-align:left;color:#ffffff;"
                              >
                                下記のボタンを押して予約を完了してください。
                              </div>
                            </td>
                          </tr>
      
                          <tr>
                            <td
                              align="left"
                              vertical-align="middle"
                              style="font-size:0px;padding:10px 25px;word-break:break-word;"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="border-collapse:separate;line-height:100%;"
                              >
                                <tr>
                                  <td
                                    align="center"
                                    bgcolor="#ffffff"
                                    role="presentation"
                                    style="border:none;border-radius:10px;cursor:auto;padding:10px 25px;background:#ffffff;"
                                    valign="middle"
                                  >
                                    <a href="${url}">
                                      <p
                                        style="background:#ffffff;color:#1AA0E1;font-family:open Sans Helvetica, Arial, sans-serif;font-size:22px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;"
                                      >
                                        予約を完了する
                                      </p></a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
      
                          <tr>
                            <td
                              align="left"
                              style="font-size:0px;padding:10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;"
                            >
                              <div
                                style="font-family:open Sans Helvetica, Arial, sans-serif;font-size:15px;line-height:1;text-align:left;color:#ffffff;"
                              ></div>
                            </td>
                          </tr>
                        </table>
                      </div>
      
                      <!--[if mso | IE]>
                          </td>
                        
                      </tr>
                    
                                </table>
                              <![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <!--[if mso | IE]>
                        </td>
                      </tr>
                    </table>
                    <![endif]-->
          </div>
        </body>
      </html>
      `
      await sendMail(data.email, 'gradyチケット仮予約完了のお知らせ', text)
      res.send('おけまる')
    })
    .catch((e: any) => e)
}

export interface requestBody {
  movieId?: string
  genre?: string
  email: string
  theater: string
  adult: number
  kids: number
  date: string
  time: string
  orderNumber: string
  sheet: []
}

// interface data {
//   theater: string
//   adult: number
//   kids: number
//   date: string
//   time: string
//   purchasedAt: any
//   paymentMethod: boolean
// }

export const reserved = async (req: any, res: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  const requestBody: requestBody = req.body
  // const {theater, adult, kids, date, time, orderNumber, email} = requestBody
  const { orderNumber, email } = requestBody

  // 予約番号の存在チェック
  const orderNumberCheck = await app.content.get({
    schemaKey: 'paymentInfo',
    entryId: orderNumber,
    fields: []
  })
  if (!orderNumberCheck) {
    res.status(401).send('orderNumberがない')
    return
  }

  // 重複チェックしてから座席の更新
  // await seatUpdate(requestBody).catch(() => {
  //   res.status(401).send('座席の重複')
  // })

  // 予約番号があれば更新してメールを送信
  // const addData: data = {
  //   theater,
  //   adult,
  //   kids,
  //   date,
  //   time,
  //   purchasedAt: timestamp,
  //   paymentMethod: true
  // }
  // await app.content.update({
  //   schemaKey: 'paymentInfo',
  //   entryId: orderNumber,
  //   data: addData
  // })

  await sendMail(email, '完了', `予約完了`)
  res.send('おけまる')
}
