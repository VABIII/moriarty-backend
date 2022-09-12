
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('userId')
            tbl.string('name')
        })
        .createTable('books', tbl => {
            tbl.increments('bookId')
            tbl.string('title', 255).unique().notNullable()
            tbl.boolean('finished').notNullable()
            tbl.integer('userId', 255)
                .unsigned()
                .notNullable()
                .references('userId')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('books')
        .dropTableIfExists('users')
};
