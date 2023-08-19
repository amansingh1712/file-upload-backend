import * as express from 'express';
import { FileRoutes } from './routes';

export class FileRouter {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.router.post('/create-short-url', FileRoutes.createShortUrl);
    this.router.get('/:shortId', FileRoutes.downloadFile);
  }
}
