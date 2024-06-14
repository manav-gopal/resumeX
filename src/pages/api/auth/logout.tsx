import { NextApiRequest, NextApiResponse } from 'next';
import { logout } from 'src/controllers/auth.controller';

export default async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await logout(req, res);
      return res;
    } catch (error: string | any) {
      return res.status(500).json({ message: 'Error logging out', error: error.message });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
