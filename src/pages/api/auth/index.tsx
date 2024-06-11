/* eslint-disable import/no-unresolved */
// api/profile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserData } from 'src/controllers/user.controller';
import { authenticateToken } from 'src/middleware/auth.middleware';

export default async function profileHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      authenticateToken(req, res, async () => {
        await getUserData(req, res);
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Error fetching user data', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
