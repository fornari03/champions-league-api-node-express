import { Request, Response } from "express";
import {
  getPlayerByIdService,
  getPlayerService,
  createPlayerService,
  deletePlayerService,
  updatePlayerService
} from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const httpResponse = await getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const httpResponse = await createPlayerService(req.body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const { id } = req.params;

  const httpResponse = await deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bodyStats: StatisticsModel = req.body;

  const httpResponse = await updatePlayerService(id, bodyStats);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}