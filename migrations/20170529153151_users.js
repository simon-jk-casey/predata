
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('streetAddress').notNullable().unique()
    table.string('suburb').notNullable()
    table.string('city').notNullable()
    table.string('gpsCoords').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
