// user.controller.ts

import { NextApiRequest, NextApiResponse } from 'next';
import User from 'src/models/user.model';

export async function getUserData(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const userEmail = (req as any).user.userEmail; // Getting user email after Decoding the jwt token in auth middleware
    const userData = await User.findOne({ email: userEmail });

    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Modify the data to only include necessary fields, if required
    const { _id, email, name } = userData;

    res.status(200).json({ user: { _id, email, name } });
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching user data', error: error.message });
  }
}
