import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ init: ' World' }));

export default routes;
