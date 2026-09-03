import express from 'express';
import routerUsers from './routes/user.routes.ts';

const app = express();

app.use('/users', routerUsers);

app.listen(3000);