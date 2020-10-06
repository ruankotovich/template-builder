import { Transaction } from 'sequelize';
import <Name>Repository from '../<name>.repository';
import <Name> from '../<models_folder>/<name>';

export default class <Name>Save {
  private repository: <Name>Repository;

  constructor(transaction?: Transaction) {
    this.repository = new <Name>Repository(transaction);
  }

  save(<name>: <Name>): Promise<<Name>> {
    return this.repository.save(<name>);
  }
}
