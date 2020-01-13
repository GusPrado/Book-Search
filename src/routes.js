import { Router } from 'express';

import BookController from './app/controllers/BookController';

const routes = new Router();

routes.get('/', BookController.index);
routes.get('/busca', BookController.show);

export default routes;
