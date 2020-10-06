import <Name>Client from '../<name>.client';
import { <Name> } from '../domain/<name>';

export default class <Name>Update {
  private client: <Name>Client;

  constructor() {
    this.client = new <Name>Client();
  }

  update(id: keyof <Name>, <name>: <Name>): Promise<[number, <Name>[]]> {
    return this.client.update(id, <name>);
  }
}
