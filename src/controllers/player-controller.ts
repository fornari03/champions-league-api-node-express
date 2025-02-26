import { Request, Response } from "express";
import {
  getPlayerByIdService,
  getPlayerService,
  createPlayerService,
  deletePlayerService,
} from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const httpResponse = await getPlayerByIdService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const httpResponse = await createPlayerService(req.body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const { id } = req.params;

  const httpResponse = await deletePlayerService(parseInt(id));

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
