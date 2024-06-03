import { RequestHandler, Response, Request } from "express";

import * as groups from '../services/groups';

export const getAll: RequestHandler = async (req: Request, res: Response) => {
    const { id_event } = req.params;

    const items = await groups.getAll(parseInt(id_event));
    if (items) return res.json({ groups: items });

    res.json({ error: 'Ocorreu um erro' });
};

export const getGroup: RequestHandler = async (req: Request, res: Response) => {
    const { id, id_event } = req.params;

    const groupItem = await groups.getOne({
        id: parseInt(id),
        id_event: parseInt(id_event)
    });
    if (groupItem) return res.json({ group: groupItem });

    res.json({ error: 'Ocorreu um erro' });
};