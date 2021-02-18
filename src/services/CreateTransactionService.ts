// import AppError from '../errors/AppError';
import { v4 as uuidv4 } from 'uuid';
import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    // TODO
  }
}

export default CreateTransactionService;
