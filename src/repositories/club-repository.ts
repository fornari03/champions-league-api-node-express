import { ClubModel } from "../models/club-model";
import { db } from "../data/connect";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const clubs = await db.collection("clubs").find().toArray();
  return clubs.map(club => ({
    _id: club._id,
    name: club.name
  } as ClubModel));
};
