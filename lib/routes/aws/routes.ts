// NPM Dependencies
import * as express from 'express';
import * as status from 'http-status';

// Internal Dependencies
import { AwsHelpers } from './helpers';

export class AwsRoutes {
  public static getPreSignedUrl = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const query: { fileName?: string; fileType?: string } = req.query;
    const { fileName, fileType } = query;
    const { url, keyFile } = await AwsHelpers.getSignedUrl(fileName, fileType);
    return res.json({ url, keyFile });
  };
}
