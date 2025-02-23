import * as PlayerRepository from "../repositories/player-repository";
import { HttpResponse } from "../models/http-response-model";
import * as HttpHelper from "../utils/http-helper";

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
