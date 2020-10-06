import { Transaction } from 'sequelize';
import <Name>Repository from '../<name>.repository';
import <Name> from '../<models_folder>/<name>';

export default class <Name>Find {
  private repository: <Name>Repository;

  constructor(transaction?: Transaction) {
    this.repository = new <Name>Repository(transaction);
  }

  findAll(): Promise<<Name>[]> {
    return this.repository.findAll();
  }

  findById(id: string): Promise<<Name> | null> {
    return this.repository.findById(id);
  }
}
