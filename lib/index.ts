// Get dependencies
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import { config } from './config';
import * as path from 'path';

// Get DB
import * as models from './db';
import { AwsRouter } from './routes/aws';
import { FileRouter } from './routes/file';

try {
  const app = express();
  // Configure CORS options
  const corsOptions = {
    origin: '*', // Replace with the allowed origin(s)
    methods: 'GET, POST, PUT, DELETE', // Specify the allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Specify allowed headers
  };
  app.use(cors(corsOptions));

  // Parsers for POST data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/aws', new AwsRouter().router);
  app.use('/file', new FileRouter().router);
  app.get('/ram', (req, res) => {
    res.send('working fine!');
  });

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
  console.log('error:', error);
  process.exit(1);
}
