exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("name");
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("phone");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("zip");
    table
      .boolean("admin")
      .notNullable()
      .defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers");
};
