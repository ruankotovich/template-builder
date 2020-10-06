import <Name>Client from '../<name>.client';
import { <Name> } from '../domain/<name>';

export default class <Name>Save {
  private client: <Name>Client;

  constructor() {
    this.client = new <Name>Client();
  }

  save(<name>: <Name>): Promise<<Name>> {
    return this.client.save(<name>);
  }
}
