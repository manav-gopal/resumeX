// authUtils.js
import jwt from 'jsonwebtoken';

const SECRET_KEY : string = process.env.SECRET_KEY as string;

export function generateToken(payload: any): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, SECRET_KEY);
}

// export function extractTokenFromHeaders(req: NextApiRequest): string | null {
//   const authHeader = req.headers.authorization;
//   if (authHeader && authHeader.startsWith('Bearer ')) {
//     return authHeader.split(' ')[1];
//   }
//   return null;
// }
