import { ObjectId } from "mongodb";

export interface ClubModel {
  _id: ObjectId;
  name: string;
}