import { Transaction } from 'sequelize';
import <Name>Repository from '../<name>.repository';
import <Name> from '../<models_folder>/<name>';

export default class <Name>Update {
  private repository: <Name>Repository;

  constructor(transaction?: Transaction) {
    this.repository = new <Name>Repository(transaction);
  }

  update(id: string, <name>: <Name>): Promise<[number, <Name>[]]> {
    return this.repository.update(id, <name>);
  }
}
