import { Transaction } from 'sequelize';
import <Name> from '<models_folder>/<name>';
import Repository from '../../types/repository';

export default class <Name>Repository extends Repository<<Name>> {
  constructor(transaction?: Transaction) {
    super(<Name>, transaction);
  }
}
