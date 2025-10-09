import type { VercelRequest, VercelResponse, VercelRequestQuery } from '@vercel/node';
import handler from '../../[...path]';

export default function year(req: VercelRequest, res: VercelResponse) {
  const year = (req.query.year as string) || (req as any)?.params?.year;
  const q: VercelRequestQuery = {
    ...req.query,
    path: JSON.stringify(['commits', 'year', String(year)]),
  };
  req.query = q;
  return (handler as any)(req, res);
}