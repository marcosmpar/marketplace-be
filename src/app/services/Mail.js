const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

// const transport = nodemailer.createTransport({
//   host: 'smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: '6151bb2ee2f955',
//     pass: '7693030aa266a7'
//   }
// })

const transport = nodemailer.createTransport(mailConfig)

const viewPath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      partialsDir: path.resolve(viewPath, 'partials'),
      defaultLayout: null
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
