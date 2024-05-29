import { Router, Request, Response } from "express";
import * as Auth from '../controllers/auth';

const router = Router();

router.get('/ping', Auth.validate, (req: Request, res: Response) => res.json({ pong: true, admin: true }));
router.post('/login', Auth.login);

export default router;