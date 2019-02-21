// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/recipes.sqlite3'
    },
    useNullAsDefault: true, //needed for sqlite
  },
};
