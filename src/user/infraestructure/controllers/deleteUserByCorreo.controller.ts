import { DeleteUserByCorreoService } from "../../aplication/service";
import { Request, Response } from "express";

export class DeleteUserByCorreoController {
  constructor(private readonly deleteUserService: DeleteUserByCorreoService) {}
  async run(req: Request, res: Response) {
    try {
      const { correo } = req.params;
      const handleError = await this.deleteUserService.run(correo);
      if (handleError) return res.status(200).json("Usurio eliminado exitosamente");
      return res.status(404).json("Ocurrio un error el eliminar el usuario");
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
