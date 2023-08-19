// NPM Dependencies
import * as express from 'express';
import * as status from 'http-status';
import { FileHelpers } from './helpers';
import { Url } from '../../db';
import axios from 'axios';
import * as StandardError from 'standard-error';
import * as path from 'path';

// Internal Dependencies

export class FileRoutes {
  public static createShortUrl = async (
    req: express.Request,
    res: express.Response
  ) => {
    const url = req.body.url;

    const data = await FileHelpers.createShortUrl(url);
    return res.json({ data });
  };
  public static downloadFile = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const shortId = req.params.shortId;

    const file = await Url.findOne({ shortId: shortId });
    if (!file) {
      res.send('No file exist');
    }
    const redirectUrl = file.redirectUrl;
    // Extract the file name from the URL
    const fileNameOriginal = path.basename(redirectUrl);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${fileNameOriginal}"`
    );
    res.setHeader('Content-Type', 'application/octet-stream');
    try {
      const response = await axios.get(redirectUrl, {
        responseType: 'stream',
      });
      response.data.pipe(res);
    } catch (error) {
      console.error('Error downloading file:', error.message);
      res.status(500).send('Error downloading file');
    }

    res.on('finish', () => {
      next();
    });
  };
}
