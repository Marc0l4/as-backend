import { Router, Request, Response } from "express";

import * as Events from '../controllers/events';
import * as People from '../controllers/people';

const router = Router();

router.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

router.get('/events/:id', Events.getEvent);
router.get('/events/:id_event/search', People.searchPerson);

export default router;