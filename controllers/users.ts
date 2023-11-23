import { Router } from "express";

const usersRouter = Router();

usersRouter.get('/', (_req, res) => {
    return res.status(404).send('users');
});

usersRouter.get('/:id', (_req, res) => {
    return res.status(404);
});

usersRouter.post('/', (_req, res) => {
    return res.status(404);
});

export default usersRouter;