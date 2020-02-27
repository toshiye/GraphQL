
exports.up = function(knex, promise) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.string('senha', 60).notNull()
        table.boolean('ativo').notNull().defaultTo(true)
        table.timestamp('data-criacao').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('usuarios')
};
