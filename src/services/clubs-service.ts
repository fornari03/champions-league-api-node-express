import { HttpResponse } from "../models/http-response-model";
import * as HttpHelper from "../utils/http-helper";
import * as ClubRepository from "../repositories/club-repository";

export const getClubService = async (): Promise<HttpResponse> => {
  const data = await ClubRepository.findAllClubs();
  let response: HttpResponse;

  if (data) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};
