exports.up = function(knex, Promise) {
  return knex.schema.createTable("transactions", function(table) {
    table.increments();
    table
      .integer("movie_id")
      .references("id")
      .inTable("movies")
      .notNullable();
    table
      .integer("customer_id")
      .references("id")
      .inTable("customers")
      .notNullable();
    table.string("price");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("transactions");
};
