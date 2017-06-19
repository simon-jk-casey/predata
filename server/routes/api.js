const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/v1', (req, res) => {
  res.json('API V1 ENDPOINT ACTIVE')
})

router.post('/v1/register', (req, res) => {
  db.addUser(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
    //SQL constraint errors dont throw look into handling this ie unique email
  })
})

// TEMP AUTH ROUTE TIL PASSPORT/BCRYPT ADDED
router.post('/v1/auth', (req, res) => {
  let password = req.body.password
  db.getUserByEmail(req.body.email)
  .then((data) => {
    if (data.password == password) res.sendStatus(200)
    else res.sendStatus(401)
  })
})

router.get('/v1/user/:id', (req, res) => {
  // when auth present ... db.getUserById(req.user.userId) - rem :id from url
  db.getUserById(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

router.put('/v1/user', (req, res) => {
  // edit user info TBC
})

router.get('/v1/devices', (req, res) => {
  db.getDevices()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/v1/devices', (req, res) => {
  const { userId, deviceName, deviceType, deviceNotes } = req.body
  // when auth present const userId = req.user.userId
  const device = {userId, deviceName, deviceType, deviceNotes}
  db.addDevice(device)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.get('/v1/devices/:id', (req, res) => {
  db.getDeviceById(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

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

router.get('/v1/myDevices', (req, res) => {
  // when auth present db.getUserDevices(req.user.userId)
  db.getUserDevices(req.body.userId)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

router.post('/v1/captureData', (req, res) => {
  const { userId, captureDevice, capturedPredator, captureNotes } = req.body
  // when auth present const { userId } = req.user
  const captureData = {userId, deviceId: captureDevice, predCaptured: capturedPredator, predNotes: captureNotes}
  db.addPredatorData(captureData)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    throw err
  })
})

router.get('/v1/captureData', (req, res) => {
  db.getCaptureData()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

router.get('/v1/myCaptureData', (req, res) => {
  // when auth present db.getUserCaptureData(req.user.userId)
  db.getUserCaptureData(req.body.userId)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err
  })
})

module.exports = router
