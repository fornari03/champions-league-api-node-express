import * as PlayerRepository from "../repositories/player-repository";
import { HttpResponse } from "../models/http-response-model";
import * as HttpHelper from "../utils/http-helper";
import { PlayerModel } from "../models/player-model";

export const getPlayerService = async (): Promise<HttpResponse> => {
  const data = await PlayerRepository.findAllPlayers();
  let response: HttpResponse;

  if (data) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (
  id: number
): Promise<HttpResponse> => {
  const data = await PlayerRepository.findPlayerById(id);
  let response: HttpResponse;

  if (data) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};

export const createPlayerService = async (
  player: PlayerModel
): Promise<HttpResponse> => {
  if (
    !player.name ||
    !player.club ||
    !player.nationality ||
    !player.position ||
    !player.statistics
  ) {
    return await HttpHelper.badRequest();
  }
  const data = await PlayerRepository.insertPlayer(player);
  let response: HttpResponse;

  if (data) {
    response = await HttpHelper.created(data);
  } else {
    response = await HttpHelper.badRequest();
  }

  return response;
};

export const deletePlayerService = async (
  id: number
): Promise<HttpResponse> => {
  const data = await PlayerRepository.deletePlayer(id);
  let response: HttpResponse;

  if (data) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};
