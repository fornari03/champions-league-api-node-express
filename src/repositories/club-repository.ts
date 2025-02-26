import { ClubModel } from "../models/club-model";

const database = [
  {
    id: 1,
    name: "Real Madrid",
  },
  {
    id: 2,
    name: "Manchester City",
  },
  {
    id: 3,
    name: "Barcelona",
  },
  {
    id: 4,
    name: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Bayern de Munique",
  },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};
