import { Request, Response } from "express";
import { UpdateUserByCorreoService } from "../../aplication/service";

export class UpdateUserByCorreoController {
  constructor(private readonly updateUserByIdService: UpdateUserByCorreoService) {}
  async run(req: Request, res: Response) {
    try {
      const { correo } = req.params;
      const user = req.body;
      const result = await this.updateUserByIdService.run(user, correo);
      return res.status(200).json(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
}
