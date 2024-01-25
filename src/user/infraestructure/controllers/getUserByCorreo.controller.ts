import { Request, Response } from "express";
import { GetUserByCorreoService } from "../../aplication/service";

export class GetUserByCorreoController {
  constructor(private readonly getUserByIdService: GetUserByCorreoService) {}
  async run(req: Request, res: Response) {
    try {
      const { correo } = req.params;
      const result = await this.getUserByIdService.run(correo);
      if (result.correo !== "") return res.status(200).send(result);
      return res.status(404).send(result);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
}
