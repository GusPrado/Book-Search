import { Router } from 'express';
import Book from './app/models/Book';

const routes = new Router();

routes.get('/', async (req, res) => {
  const book = await Book.findAll({});

  res.json(book);
});

export default routes;
