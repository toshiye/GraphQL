
exports.up = function(knex, promise) {
    return knex.schema.createTable( 'usuarios_prefis', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('usuario_id').references('usuarios.id')
        table.foreign('perfil_id').references('perfis.id')
        table.primary(['usuario_id', 'perfil_id'])
    })
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('usuarios_perfis')
};
