// Update with your config settings.
const { db } = require('./.env')

module.exports = {
    client: 'postgresql',
    connection: db,
    // connection: {
    //   database: 'knowledge',
    //   user:     'postgres',
    //   password: 'admin'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
