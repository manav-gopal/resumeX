import { Request, Response } from 'express';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import User from 'src/models/user.model';
import { generateToken } from 'src/helpers/utils/authUtils';

export async function signup(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    // Set up a session or token for authentication
    // For example, using JWT tokens or express-session
    const token: string = generateToken({ userEmail: email, userPassword: hashedPassword });
    setTokenCookies(res as any, token);

    res.status(201).json({ message: 'Signup successful', newUser });
  } catch (error: any) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
}

export async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Set up a session or token for authentication
    // For example, using JWT tokens or express-session
    const token: string = generateToken({ userEmail: user.email, userId: user._id });
    setTokenCookies(res as any, token);

    // Passwords match - proceed with successful login
    res.status(200).json({ message: 'Login successful', token: token, status: 200 });
    return;
  } catch (error: any) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
}

// funtion For setting the Access token cookies
function setTokenCookies(res: NextApiRequest, token: string): void {
  try {
    const cookieValue = `access_token=${token}; HttpOnly; Max-Age=${
      24 * 60 * 60
    }; Secure=${false}; path=/;`; // Valid for 24 Hours
    (res as any).setHeader('Set-Cookie', cookieValue);

    return;
  } catch (error) {
    console.log('Error Setting the token cookies ', error);
  }
}
