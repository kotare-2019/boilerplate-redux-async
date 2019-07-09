
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').unique()
    table.string('location')
    table.integer('date')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
