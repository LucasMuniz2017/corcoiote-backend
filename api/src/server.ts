import express from 'express';
import routerUsers from './routes/user.routes.ts';
import routerInvoices from './routes/invoice.route.ts';

import path from 'node:path';

const client = path.join(import.meta.dirname, '..', '..', 'web');

const app = express();

app.use(express.json());

app.use('/users', routerUsers);
app.use('/invoices', routerInvoices);

app.use(express.static(client));

app.listen(process.env.PORT);