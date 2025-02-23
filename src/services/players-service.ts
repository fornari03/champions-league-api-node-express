import * as PlayerRepository from "../repositories/player-repository";
import {HttpResponse } from "../models/http-response-model";
import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async (): Promise<HttpResponse> => {
  const data = await PlayerRepository.findAllPlayers();
  let response: HttpResponse;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
