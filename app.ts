import express from 'express';
import { 
        loginRouter,
        commentsRouter,
        postsRouter,
        usersRouter 
} from './controllers';


const app = express();
app.use(express.json());

app.use('/login', loginRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);


export default app;