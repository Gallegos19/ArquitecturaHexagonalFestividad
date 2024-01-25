import { Request, Response } from "express";
import { GetFestividadService } from "../../aplication/service";

export class GetFestividadController {
  constructor(private readonly GetFestividadService: GetFestividadService) {}
  async run(req: Request, res: Response) {
    try {
      const result = await this.GetFestividadService.run();
      res.status(200).send(result);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
