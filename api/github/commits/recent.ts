import type { VercelRequest, VercelResponse, VercelRequestQuery } from '@vercel/node';
import handler from '../[...path]';

export default function recent(req: VercelRequest, res: VercelResponse) {
  const q: VercelRequestQuery = {
    ...req.query,
    path: JSON.stringify(['commits', 'recent']),
  };
  req.query = q;
  return (handler as any)(req, res);
}