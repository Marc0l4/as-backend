import { NextFunction, RequestHandler, Request, Response } from "express";

export const requestIntercepter: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);

    next();
}