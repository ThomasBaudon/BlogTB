const knex = require('knex')({
    client: 'pg',
    connection: 'postgresql://postgres:P8X8J9iHX0VKd8kdwAra@containers-us-west-41.railway.app:7888/railway',
    searchPath: ['knex', 'public'],
  });

module.exports = knex