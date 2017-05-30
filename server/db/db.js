var env = process.env.NODE_ENV || 'development'

const Knex = require('knex')
const knexConfig = require('../../knexfile')[env]
const knex = Knex(knexConfig)

// USER TABLE

// REMOVE PASSWORD FROM USER DATA FUNCTIONS WHERE NOT NEEDED WHEN APPROPRIATE

function addUser (user) {
  return knex('users').insert(user)
}

function getUsers () {
  return knex('users')
}

function getUserByEmail (email) {
  return knex('users').where('email', `${email}`)
}

function getUserById (id) {
  return knex('users').where('id', `${id}`)
}

//add function to update user details

function removeUser (id) {
  return knex('users').where('id', `${id}`).del()
}

// DEVICE TABLE

function addDevice (device) {
  return knex('devices').insert(device)
}

function getDevices () {
  return knex('devices')
}

function getDeviceById (id) {
  return knex('devices').where('id', `${id}`)
}

// add function to update device details

function getUserDevices (userId) {
  return knex('devices').where('userId', `${userId}`)
}

function removeDevice (id) {
  return knex('devices').where('id', `${id}`).del()
}

// PREDATOR DATA TABLE

function addPredatorData (predatorData) {
  return knex('predatorData').insert(predatorData)
}

function getCaptureData () {
  return knex('predatorData')
    .join('devices', 'predatorData.deviceId', 'devices.id')
    .select('captureDate')
    .select('predatorData.id as predatorId')
    .select('predCaptured')
    .select('predNotes')
    .select('deviceName')
    .select('deviceType')
    .select('deviceNotes')
}

function getUserCaptureData (userId) {
  return knex('predatorData')
    .join('devices', 'predatorData.deviceId', 'devices.id')
    .select('captureDate')
    .select('predatorData.id as predatorId')
    .select('predCaptured')
    .select('predNotes')
    .select('deviceName')
    .select('deviceType')
    .select('deviceNotes')
    .where('predatorData.userId', `${userId}`)
}

// add functions later for search -- by suburb, date range, trap type

function getCaptureDataBySuburb (suburb) {
  return knex('predatorData')
    .join('devices', 'predatorData.deviceId', 'devices.id')
    .join('users', 'predatorData.userId', 'users.id')
    .select('captureDate')
    .select('predatorData.id as predatorId')
    .select('predatorCaptured')
    .select('predNotes')
    .select('deviceName')
    .select('deviceType')
    .select('deviceNotes')
    .select('streetAddress')
    .select('suburb')
    .select('gpsCoords')
    .where('users.suburb', `${suburb}`)
}

module.exports = {
  addUser,
  getUsers,
  getUserByEmail,
  getUserById,
  removeUser,
  addDevice,
  getDevices,
  getDeviceById,
  getUserDevices,
  removeDevice,
  addPredatorData,
  getCaptureData,
  getUserCaptureData,
  getCaptureDataBySuburb
}
