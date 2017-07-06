const passport = require('passport')
const Strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

import db from './db/db'

const userObjCreator = (user) => {
  return {
    userId: user.id,
    email: user.email
  }
}

passport.use(new Strategy((email, password, done) => {
  db.getUserByEmail(email)
  .then((user) => {
    if (user.length === 0) {
      done (null, false, {status: 401, message: 'User not found'})
    } else {
      bcrypt.compare(password, user[0].password, (err, res) => {
        if (err) throw err
        else if (res) {
          return done(null, userObjCreator(user[0]))
        } else {
          return done(null)
        }
      })
    }
  })
  .catch((err) => {
    done(err)
  })
}))

passport.serializeUser((user, done) => {
  done(null, user.userId)
})

passport.deserializeUser((id, done) => {
  db.getUserById(id)
  .then((user) => {
    done(null, userObjCreator(user[0]))
  })
  .catch((err) => {
    done(err)
  })
})
