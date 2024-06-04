import { Router, Request, Response } from "express";

import * as Auth from '../controllers/auth';
import * as Events from '../controllers/events';
import * as Groups from '../controllers/groups';
import * as People from '../controllers/people';

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
router.post('/events/:id_event/groups', Auth.validate, Groups.addGroup);
router.put('/events/:id_event/groups/:id', Auth.validate, Groups.updateGroup);
router.delete('/events/:id_event/groups/:id', Auth.validate, Groups.deleteGroup);

router.get('/events/:id_event/groups/:id_group/people', Auth.validate, People.getAll);
/*router.get('/events/:id_event/groups/:id_group/people/:id', Auth.validate, People.getPeople);
router.post('/events/:id_event/groups/:id_group/people', Auth.validate, People.addPeople);
router.put('/events/:id_event/groups/:id_group/people/:id', Auth.validate, People.updatePeople);
router.delete('/events/:id_event/groups/:id_group/people/:id', Auth.validate, People.deletePeople);*/

export default router;