import * as dotenv from 'dotenv';
dotenv.config();
class Config {
  DB_PATH: string;
  PORT: string;
  HOST: string;
  FRONTEND_HOST: string;
  S3_USER_KEY: string;
  S3_USER_SECRET: string;
  S3_BUCKET_NAME: string;
  S3_BUCKET_REGION: string;

  constructor() {
    this.DB_PATH = process.env.DB_PATH;
    this.PORT = process.env.PORT;
    this.HOST = process.env.HOST;
    this.FRONTEND_HOST = process.env.FRONTEND_HOST;
    this.S3_USER_KEY = process.env.S3_USER_KEY;
    this.S3_USER_SECRET = process.env.S3_USER_SECRET;
    this.S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
    this.S3_BUCKET_REGION = process.env.S3_BUCKET_REGION;
  }
}

export const config = new Config();
