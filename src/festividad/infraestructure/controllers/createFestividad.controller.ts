import { Request, Response } from "express";
import { CreateFestividadService } from "../../aplication/service";

export class CreateFestividadController {
  constructor(private readonly createFestividadService: CreateFestividadService) {}
  async run(req: Request, res: Response) {
    try {
      const festividad = req.body;
      const result = await this.createFestividadService.run(festividad);
      res.status(201).send(result);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
