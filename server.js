require('dotenv').config()

const AWS = require('aws-sdk')

var ses = new AWS.SES()

var params = {
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
ses.sendEmail(params, function(err, data) {
  if (err)
    console.log(err, err.stack) // an error occurred
  else console.log(data) // successful response
  /*
     data = {
     MessageId: "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
     }
   */
})
