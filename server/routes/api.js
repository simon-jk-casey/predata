const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('../passportSetup')

const db = require('../db/db')

const saltRounds = 10

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.json({status: 401, message: 'Unauthorised'})
  }
}

router.get('/v1', (req, res) => {
  res.json('API V1 ENDPOINT ACTIVE')
})

router.post('/v1/register', (req, res) => {
  console.log('hit')
  const {
    firstName,
    lastName,
    streetAddress,
    suburb,
    city,
    gpsCoords,
    email,
    password
  } = req.body

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err
    else {
      const user = {
        firstName,
        lastName,
        streetAddress,
        suburb,
        city,
        gpsCoords,
        email,
        password: hash
      }
      db.addUser(user)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        throw err
      })
    }
  })
  // SQL constraint errors dont throw look into handling this ie unique email
})

router.post('/v1/auth', passport.authenticate('local'), (req, res) => {
  res.sendStatus(200)
  res.json({user: req.user})
})

router.get('/v1/user', ensureAuthenticated, (req, res) => {
  db.getUserById(req.user.userId)
  .then((userInfo) => {
    res.json(userInfo)
  })
  .catch((err) => {
    throw err
  })
})

// router.put('/v1/user', (req, res) => {
//   edit user info TBC
// })

// CAN THIS ROUTE BE OPEN - RESTRICT PROVIDED DATA PERHAPS
router.get('/v1/devices', ensureAuthenticated, (req, res) => {
  db.getDevices()
  .then((deviceData) => {
    res.json(deviceData)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/v1/devices', ensureAuthenticated, (req, res) => {
  const { deviceName, deviceType, deviceNotes } = req.body
  const userId = req.user.userId
  const device = {userId, deviceName, deviceType, deviceNotes}
  db.addDevice(device)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

// THESE THREE COMMENTED OUT TIL LATER (GET TO UPDATE OR DELETE...)

// router.get('/v1/devices/:id', (req, res) => {
//   db.getDeviceById(req.params.id)
//   .then((data) => {
//     res.json(data)
//   })
//   .catch((err) => {
//     throw err
//   })
// })

// router.put('v1/devices/:id', (req, res) => {
//   // edit/update device info
// })

// DELETE ROUTE DOESNT WORK / COULD BE CORRESPONDING FUNCTION
// router.delete('v1/devices/:id', (req, res) => {
//   db.removeDevice(req.params.id)
//   .then(() => {
//     res.sendStatus(204)
//   })
//   .catch((err) => {
//     throw err
//   })
// })

router.get('/v1/myDevices', ensureAuthenticated, (req, res) => {
  db.getUserDevices(req.user.userId)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/v1/captureData', ensureAuthenticated, (req, res) => {
  const { captureDevice, capturedPredator, predatorNotes } = req.body
  const { userId } = req.user
  const captureData = {userId, deviceId: captureDevice, capturedPredator, predatorNotes}
  db.addPredatorData(captureData)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

// PROBABLY OPEN ROUTE, COMMENTED TILL USED WITH MAPPING
// router.get('/v1/captureData', (req, res) => {
//   db.getCaptureData()
//   .then((data) => {
//     res.json(data)
//   })
//   .catch((err) => {
//     throw err
//   })
// })

router.get('/v1/myCaptureData', ensureAuthenticated, (req, res) => {
  db.getUserCaptureData(req.user.userId)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

module.exports = router
