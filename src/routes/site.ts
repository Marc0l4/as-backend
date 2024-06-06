import { Router, Request, Response } from "express";

import * as Events from '../controllers/events';

const router = Router();

router.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

router.get('/events/:id', Events.getEvent);

export default router;