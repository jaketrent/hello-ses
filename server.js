require('dotenv').config()

const AWS = require('aws-sdk')

const ses = new AWS.SES()

const params = {
  Destination: {
    ToAddresses: [process.env.TO_EMAIL]
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data:
          'This message body contains HTML formatting. It can, for example, contain links like this one: <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.'
      },
      Text: {
        Charset: 'UTF-8',
        Data: 'This is the message body in text format.'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Test email from code'
    }
  },
  ReturnPath: process.env.FROM_EMAIL,
  Source: process.env.FROM_EMAIL
}

ses.sendEmail(params, (err, data) => {
  if (err) console.log(err, err.stack)
  else console.log(data)
})
