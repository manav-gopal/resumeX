// import { Router, Request, Response } from 'express';
// import * as AuthController from 'src/controllers/auth.controller'; // Import your auth controller functions

// const router = Router();

// router.post('/signup', async (req: Request, res: Response) => {
//   try {
//     await AuthController.signup(req, res);
//   } catch (error: any) {
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// });

// router.post('/login', async (req: Request, res: Response) => {
//   try {
//     await AuthController.login(req, res);
//   } catch (error: any) {
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// });

// export default router;