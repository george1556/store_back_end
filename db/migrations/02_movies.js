exports.up = function(knex, Promise) {
  return knex.schema.createTable("movies", function(table) {
    table.increments();
    table.string("title");
    table.string("genre");
    table.text("description");
    table.string("price");
    table.integer("quantity");
    table.boolean("available_to_buy");
    table.string("image");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("movies");
};
