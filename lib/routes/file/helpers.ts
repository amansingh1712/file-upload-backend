import { Url } from '../../db';
import { nanoid } from 'nanoid';
export class FileHelpers {
  public static createShortUrl = async (url: string) => {
    const shortId = nanoid(6);
    return await Url.create({
      shortId: shortId,
      redirectUrl: url,
    });
  };
}
