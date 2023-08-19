import * as mongoose from 'mongoose';
import { urlSchema } from './urlSchema';
import { config } from './../config';
const PATH = config.DB_PATH || 'mongodb://0.0.0.0:27017/file-upload';

mongoose.connect(PATH);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => console.info('connected to db ', PATH));

export const Url = mongoose.model('Url', urlSchema);
