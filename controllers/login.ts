import { Router } from 'express';

const loginRouter = Router();

loginRouter.get('/', (_req, res) => {
    return res.status(404).send('login');
});

loginRouter.post('/', (_req, res) => {
    return res.status(404);
});

export default loginRouter;