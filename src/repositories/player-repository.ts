import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { db } from "../data/connect";
import { ObjectId } from "mongodb";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const players = await db.collection("players").find().toArray();
  return players.map((player) => {
    const { _id, name, club, nationality, position, statistics } = player;
    return {
      _id,
      name,
      club,
      nationality,
      position,
      statistics,
    } as PlayerModel;
  });
};

export const findPlayerById = async (
  id: string
): Promise<PlayerModel | null> => {
  const player = await db
    .collection("players")
    .findOne({ _id: new ObjectId(id) });
  if (!player) {
    return null;
  }
  const { name, club, nationality, position, statistics } = player;
  return {
    _id: player._id,
    name,
    club,
    nationality,
    position,
    statistics,
  } as PlayerModel;
};

export const findPlayersByClubName = async (
  club: string
): Promise<PlayerModel[]> => {
  const players = await db.collection("players").find({ club: club }).toArray();
  return players.map((player) => {
    const { _id, name, club, nationality, position, statistics } = player;
    return {
      _id,
      name,
      club,
      nationality,
      position,
      statistics,
    } as PlayerModel;
  });
};

export const insertPlayer = async (
  player: PlayerModel
): Promise<PlayerModel | null> => {
  const result = await db.collection("players").insertOne(player);

  if (result.insertedId) {
    return { ...player, _id: result.insertedId };
  }

  return null;
};

export const deletePlayer = async (id: string): Promise<PlayerModel | null> => {
  const player = await db.collection("players").findOne({
    _id: new ObjectId(id),
  });

  if (!player) {
    return null;
  }

  const result = await db.collection("players").deleteOne({
    _id: new ObjectId(id),
  });

  if (result.deletedCount === 1) {
    const { _id, name, club, nationality, position, statistics } = player;
    return {
      _id,
      name,
      club,
      nationality,
      position,
      statistics,
    } as PlayerModel;
  }
  return null;
};

export const updatePlayer = async (
  id: string,
  statistics: StatisticsModel
): Promise<PlayerModel | null> => {
  const player = await db.collection("players").findOne({
    _id: new ObjectId(id),
  });

  if (!player) {
    return null;
  }

  const result = await db.collection("players").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        statistics,
      },
    }
  );

  if (result.modifiedCount === 1) {
    const { _id, name, club, nationality, position } = player;
    return {
      _id,
      name,
      club,
      nationality,
      position,
      statistics,
    } as PlayerModel;
  }

  return null;
};
