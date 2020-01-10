import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        isbn: Sequelize.BIGINT,
        author: Sequelize.STRING,
        pubcompany: Sequelize.STRING,
        year: Sequelize.INTEGER,
        language: Sequelize.STRING,
        weight: Sequelize.FLOAT,
        length: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        width: Sequelize.FLOAT
      },
      {
        sequelize
      }
    );
  }
}

export default Book;
