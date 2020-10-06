import <Name>Client from '../<name>.client';
import { <Name> } from '../domain/<name>';

export default class <Name>Find {
  private client: <Name>Client;

  constructor() {
    this.client = new <Name>Client();
  }

  findAll(): Promise<<Name>[]> {
    return this.client.findAll();
  }

  findById(id: keyof <Name>): Promise<<Name> | null> {
    return this.client.findById(id);
  }
}
