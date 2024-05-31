import { RequestHandler, Request, Response } from "express";
import * as events from '../services/events';
import { z } from "zod";

export const getAll: RequestHandler = async (req: Request, res: Response) => {
    const itens = await events.getAll();
    if (itens) return res.json({ events: itens });

    res.json({ error: 'Ocorreu um erro' });
}

export const getEvent: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const eventItem = await events.getOne(parseInt(id));
    if (eventItem) return res.json({ events: eventItem });

    res.json({ error: 'Ocorreu um erro' });
}

export const addEvent: RequestHandler = async (req: Request, res: Response) => {
    const addEventSchema = z.object({
        title: z.string(),
        description: z.string(),
        grouped: z.boolean()
    });
    const body = addEventSchema.safeParse(req.body);
    if (!body.success) return res.json({ error: 'Dados inválidos' });

    const newEvent = await events.add(body.data);
    if (newEvent) return res.status(201).json({ event: newEvent });

    res.json({ error: 'Ocorreu um erro' });
}