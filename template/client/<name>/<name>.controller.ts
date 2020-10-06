import { Request, Response, NextFunction } from 'express';
import { NO_CONTENT } from 'http-status';
import <Name>Save from './usecases/<name>.save';
import <Name>Update from './usecases/<name>.update';
import <Name>Find from './usecases/<name>.find';
import <Name>Remove from './usecases/<name>.remove';
import { <Name> } from './domain/<name>';

export default class <Name>Controller {
  static async findAll(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const <name> = new <Name>Find();
      const result = await <name>.findAll();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const <name> = new <Name>Find();
      const result = await <name>.findById(req.params.id as keyof <Name>);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }

  static async save(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const <name> = new <Name>Save();
      const payload = req.body as <Name>;
      const result = await <name>.save(payload);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const <name> = new <Name>Update();
      const payload = req.body as <Name>;
      await <name>.update(req.params.id as keyof <Name>, payload);
      return res.sendStatus(NO_CONTENT);
    } catch (err) {
      return next(err);
    }
  }

  static async remove(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const <name> = new <Name>Remove();
      await <name>.remove(req.params.id as keyof <Name>);
      return res.sendStatus(NO_CONTENT);
    } catch (err) {
      return next(err);
    }
  }
}
