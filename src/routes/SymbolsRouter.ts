import {Router, Request, Response, NextFunction} from 'express';

const binance = require('node-binance-api');
binance.options({
  'APIKEY':'xxx',
  'APISECRET':'xxx',
  'test': true
});

export class SymbolsRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    binance.prices(function(ticker) {
      res.send(ticker);
    });
  }

  init() {
    this.router.get('/', this.getAll);
  }
}

// Create the HeroRouter, and export its configured Express.Router
const symbolsRouter = new SymbolsRouter();
symbolsRouter.init();

export default symbolsRouter.router;