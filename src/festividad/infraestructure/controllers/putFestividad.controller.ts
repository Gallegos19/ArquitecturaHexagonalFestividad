import { Request, Response } from "express";
import { PutFestividadService } from "../../aplication/service";

export class PutFestividadController {
  constructor(private readonly putFestividadService: PutFestividadService) {}
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const festividad = req.body;
      const result = await this.putFestividadService.run(festividad, parseId);
      res.status(200).send(result);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
