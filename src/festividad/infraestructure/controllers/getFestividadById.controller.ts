import { Request, Response } from "express";
import { GetFestividadByIdService } from "../../aplication/service";

export class GetFestividadByIdController {
  constructor(private readonly GetFestividadByIdService: GetFestividadByIdService) {}
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const result = await this.GetFestividadByIdService.run(parseId);
      res.status(200).send(result);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
