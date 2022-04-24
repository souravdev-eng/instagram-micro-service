import { Request, Response, NextFunction } from "express";
interface UserPayload {
    email: string;
    id: string;
    userName: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const protect: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
