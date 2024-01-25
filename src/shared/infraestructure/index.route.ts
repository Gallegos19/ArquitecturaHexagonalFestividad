import { Router, Request, Response } from "express";

import festividadRouter from "../../festividad/infraestructure/festividad.router";
import userRouter from "../../user/infraestructure/user.router";
import authRouter from "../../auth/infraestructure/auth.router";

const prefijo = "/Api";
const indexRouter = Router();

indexRouter.use(`${prefijo}/festividad`, festividadRouter);
indexRouter.use(`${prefijo}/users`, userRouter);
indexRouter.use(`${prefijo}/auth`, authRouter)

indexRouter.get(prefijo, (req: Request, res: Response) => {
  res.status(200).send("Hola estoy ready!");
});

export default indexRouter;
