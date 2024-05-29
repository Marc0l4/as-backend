import { RequestHandler, Request, Response } from "express";
import * as events from '../services/events';

export const getAll: RequestHandler = async (req: Request, res: Response) => {
    const itens = await events.getAll();
    if (itens) return res.json({ events: itens });

    res.json({ error: 'Ocorreu um erro' });
}