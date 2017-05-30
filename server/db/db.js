const Knex = require('knex')
const knexConfig = require('../../knexfile')
const knex = Knex(knexConfig)

// USER TABLE

export function addUser (user) {
  return knex('users').insert(user)
}

export function getUsers () {
  return knex('users')
}

export function getUserByUsername (username) {
  return knex('users').where('username', `${username}`)
}

export function getUserById (id) {
  return knex('users').where('id', `${id}`)
}

export function removeUser (id) {
  return knex('users').where('id', `${id}`).del()
}

// DEVICE TABLE

export function addDevice (device) {
  return knex('devices').insert(device)
}

export function getDevices () {
  return knex('devices')
}

export function getUserDevices (userId) {
  return knex('devices').where('userId', `${userId}`)
}

export function removeDevice (id) {
  return knex('devices').where('id', `${id}`).del()
}

// PREDATOR DATA TABLE

export function addPredatorData (predatorData) {
  return knex('predatorData').insert(predatorData)
}

export function getUserCaptureData (userId) {
  return knex('predatorData')
    .join('devices', 'predatorData.deviceId', 'devices.id')
    .select('captureDate')
    .select('predatorData.id as predatorId')
    .select('predCaptured')
    .select('predatorData.notes as predatorNotes')
    .select('deviceName')
    .select('deviceType')
    .select('devices.notes as deviceNotes')
    .where('predatorData.userId', `${userId}`)
}

// add functions later for search -- by suburb, date range, trap type

export function getCaptureDataBySuburb (suburb) {
  return knex('predatorData')
    .join('devices', 'predatorData.deviceId', 'devices.id')
    .join('users', 'predatorData.userId', 'users.id')
    .select('captureDate')
    .select('predatorData.id as predatorId')
    .select('predatorCaptured')
    .select('predatorData.notes as predatorNotes')
    .select('deviceName')
    .select('deviceType')
    .select('devices.notes as deviceNotes')
    .select('streetAddress')
    .select('suburb')
    .select('gpsCoords')
    .where('users.suburb', `${suburb}`)
}
