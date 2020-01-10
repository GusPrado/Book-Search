module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'books',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true
  }
};
