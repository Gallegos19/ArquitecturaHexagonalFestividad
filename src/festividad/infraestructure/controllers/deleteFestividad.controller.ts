import { Request, Response } from "express";
import { DeleteFestividadService } from "../../aplication/service";

export class DeleteFestividadController {
  constructor(private deleteTaskService: DeleteFestividadService) {}
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const handleError = await this.deleteTaskService.run(parseId);
      if (handleError === true)
        return res.status(200).json("Se elimino correctamente ");
      return res.status(404).json("Ocurrio un error al eliminar la festividad");
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
