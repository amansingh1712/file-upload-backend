// Get dependencies
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import { config } from './config';

// Get DB
import * as models from './db';
import { AwsRouter } from './routes/aws';
import { FileRouter } from './routes/file';

try {
  const app = express();
  app.use(cors());

  // Parsers for POST data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/aws', new AwsRouter().router);
  app.use('/file', new FileRouter().router);
  /**
   * Get port from environment and store in Express.
   */
  const port = config.PORT || '8000';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  server.listen(port, () => console.info(`API running on localhost:${port}`));

  module.exports = app;
} catch (error) {
  process.exit(1);
}