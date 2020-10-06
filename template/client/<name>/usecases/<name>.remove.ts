import <Name>Client from '../<name>.client';
import { <Name> } from '../domain/<name>';

export default class <Name>Remove {
  private client: <Name>Client;

  constructor() {
    this.client = new <Name>Client();
  }

  remove(id: keyof <Name>): Promise<number> {
    return this.client.remove(id);
  }
}
