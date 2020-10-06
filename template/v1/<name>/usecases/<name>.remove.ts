import { Transaction } from 'sequelize';
import <Name>Repository from '../<name>.repository';

export default class <Name>Remove {
  private repository: <Name>Repository;

  constructor(transaction?: Transaction) {
    this.repository = new <Name>Repository(transaction);
  }

  remove(id: string): Promise<number> {
    return this.repository.remove(id);
  }
}
