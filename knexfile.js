'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/knex_sloths_dev',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex_sloths_test',
    debug: false
  }
};
