import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/api-erros";

export const errorMiddleware = (
    error: Error & Partial<ApiError>, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal Server Error';
    return res.status(statusCode).json({message});
}

// exemplo para utilizar isso nas rotas
// dentro da rota = throw new ApiError('bla bla', 400)
// dentro da rota = throw new BadRequestError('bla bla', 400)