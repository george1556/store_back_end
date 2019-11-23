exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("phone");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("zip");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers");
};
