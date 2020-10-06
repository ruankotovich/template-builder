import AbstractClient from '../../../types/client';
import { <Name> } from './domain/<name>';

export default class <Name>Client extends AbstractClient<<Name>> {
  constructor() {
    super('<plural_name>', 'poshcash-business');
  }
}
