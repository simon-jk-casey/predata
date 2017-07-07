const express = require('express')
const server = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const path = require('path')

const passport = require('./passportSetup');
const api = require('./routes/api')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cookieParser())
server.use(require('express-session')({secret: 'pr3d4t0r', resave: false, saveUninitialized: false}))
server.use(passport.initialize())
server.use(passport.session())

server.use('/api', api)

module.exports = server
