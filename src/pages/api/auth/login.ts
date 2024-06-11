import { NextApiRequest, NextApiResponse } from 'next';
import { login } from 'src/controllers/auth.controller';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await login(req, res);
      return res;
    } catch (error: string | any) {
      return res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
