import { Router, Request, Response } from "express";

import * as Auth from '../controllers/auth';
import * as Events from '../controllers/events';
import * as Groups from '../controllers/groups';

const router = Router();

router.post('/login', Auth.login);

router.get('/ping', Auth.validate, (req: Request, res: Response) => res.json({ pong: true, admin: true }));

router.get('/events', Auth.validate, Events.getAll);
router.get('/events/:id', Auth.validate, Events.getEvent);
router.post('/events', Auth.validate, Events.addEvent);
router.put('/events/:id', Auth.validate, Events.updateEvent);
router.delete('/events/:id', Auth.validate, Events.deleteEvent);

router.get('/events/:id_event/groups', Auth.validate, Groups.getAll);
router.get('/events/:id_event/groups/:id', Auth.validate, Groups.getGroup);

export default router;