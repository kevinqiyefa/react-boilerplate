const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://localhost/strings',
});

client.connect();

module.exports = client;
