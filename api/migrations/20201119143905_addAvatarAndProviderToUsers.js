export function up(knex) {
  return knex.schema.table('users', (table) => {
    table.string('avatar_url');
    table.string('provider');
    table.integer('provider_id');
  });
}

export function down(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('avatar_url');
    table.dropColumn('provider');
    table.dropColumn('provider_id');
  });
}