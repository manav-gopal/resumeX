// signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { signup } from 'src/controllers/auth.controller'; // Import your signup function from auth.controller

export default async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await signup(req, res);
      return res;
    } catch (error: any) {
      return res.status(500).json({ message: 'Error signing up', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
