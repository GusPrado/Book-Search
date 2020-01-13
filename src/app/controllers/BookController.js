import Sequelize, { Op } from 'sequelize';
import Book from '../models/Book';

class BookController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { count, rows: books } = await Book.findAndCountAll({
      limit: 10,
      offset: (page - 1) * 10
    });
    const search = { count, books };
    res.json(search);
  }

  async show(req, res) {
    const { key, year_start, year_end } = req.body;
    const interval = year_start && year_end;

    if (interval && year_end < year_start) {
      res
        .status(400)
        .json({ error: 'Ano inicial deve ser menor ou igual ao ano final' });
    }

    if (!key && interval) {
      const { page = 1 } = req.query;
      const { count, rows: books } = await Book.findAndCountAll({
        where: Sequelize.and(
          { year: { [Op.gte]: year_start } },
          { year: { [Op.lte]: year_end } }
        ),
        limit: 10,
        offset: (page - 1) * 10
      });
      const search = { count, books };
      res.json(search);
    }

    if (key && interval) {
      // if (typeof key === 'string' && interval) {
      const { page = 1 } = req.query;
      const { count, rows: books } = await Book.findAndCountAll({
        where: Sequelize.and(
          { year: { [Op.gte]: year_start } },
          { year: { [Op.lte]: year_end } },
          Sequelize.or(
            { title: { [Op.like]: `%${key}%` } },
            { author: { [Op.like]: `%${key}%` } }
          )
        ),
        limit: 10,
        offset: (page - 1) * 10
      });
      const search = { count, books };

      if (search.count === 0) {
        res.json(
          `Nenhum resultado de ${key} entre os anos ${year_start} e ${year_end}`
        );
      } else {
        res.json(search);
      }
    } else if (key && !interval) {
      console.log('key sem intervalo');
      const { page = 1 } = req.query;
      let isbn = key;
      if (isNaN(parseFloat(isbn))) {
        isbn = 0;
      }
      const { count, rows: books } = await Book.findAndCountAll({
        where: Sequelize.or(
          { title: { [Op.like]: `%${key}%` } },
          { author: { [Op.like]: `%${key}%` } },
          { isbn }
        ),
        limit: 10,
        offset: (page - 1) * 10
      });
      const search = { count, books };

      if (search.count === 0) {
        res.json(`Nenhum resultado de ${key} encontrado`);
      } else {
        res.json(search);
      }
    }
  }
}

export default new BookController();
