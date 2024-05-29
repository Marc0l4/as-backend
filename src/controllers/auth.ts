import { RequestHandler, Request, Response, NextFunction } from "express";
import { z } from "zod";

import * as Auth from '../services/auth';

export const login: RequestHandler = (req: Request, res: Response) => {
    const loginSchema = z.object({
        password: z.string()
    });
    const body = loginSchema.safeParse(req.body);
    if (!body.success) return res.json({ error: 'Dados inválidos!!!' });

    if (!Auth.validatePassword(body.data.password)) return res.status(403).json({ error: 'Acesso negado' });

    res.json({ token: Auth.createToken() });
}

export const validate: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'Acesso negado' });
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!Auth.validateToken(token)) {
        return res.status(403).json({ error: 'Acesso negado, Token invalido' });
    }

    next();
}