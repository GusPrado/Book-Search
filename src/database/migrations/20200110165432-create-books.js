module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isbn: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pubcompany: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      length: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      width: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('books');
  }
};
