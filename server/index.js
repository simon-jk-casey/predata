const server = require('./server')

const env = process.env.NODE_ENV || 'development'

const knex = require('knex')
const config = require('../knexfile')[env]

server.set('knex', knex(config))

const PORT = process.env.PORT || 3000

server.listen (PORT, function () {
  console.log('listening on port', PORT)
})
