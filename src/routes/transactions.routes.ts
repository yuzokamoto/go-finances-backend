import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  // TODO
  response.json({ ok: 'ok' });
});

transactionsRouter.post('/', async (request, response) => {
  // TODO
  response.json({ ok: 'ok' });
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
  response.json({ ok: 'ok' });
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
  response.json({ ok: 'ok' });
});

export default transactionsRouter;
