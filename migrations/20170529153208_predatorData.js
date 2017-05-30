
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('predatorData', (table) => {
    table.increments('id').primary()
    table.integer('userId').notNullable()
    table.integer('deviceId').notNullable()
    table.string('predCaptured').notNullable()
    table.string('predNotes')
    table.timestamp('captureDate').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('predatorData')
}
