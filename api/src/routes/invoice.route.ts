import { Router } from 'express';

import { findManyInvoices } from '../services/invoice.service.ts';

const router = Router();

router.get('/', (_request, response) => {
  const invoices = findManyInvoices();

  response.setHeader('Access-Control-Allow-Origin',  '*');
  response.status(200).json(invoices);
});

export default router;
