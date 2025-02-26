import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "Inglaterra",
    position: "Meio-campista",
    statistics: {
      Overall: 92,
      Pace: 80,
      Shooting: 85,
      Passing: 88,
      Dribbling: 90,
      Defending: 75,
      Physical: 82,
    },
  },
  {
    id: 2,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Noruega",
    position: "Atacante",
    statistics: {
      Overall: 91,
      Pace: 89,
      Shooting: 94,
      Passing: 75,
      Dribbling: 85,
      Defending: 40,
      Physical: 88,
    },
  },
  {
    id: 3,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brasil",
    position: "Atacante",
    statistics: {
      Overall: 90,
      Pace: 95,
      Shooting: 85,
      Passing: 80,
      Dribbling: 92,
      Defending: 35,
      Physical: 75,
    },
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "França",
    position: "Atacante",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 88,
      Passing: 80,
      Dribbling: 91,
      Defending: 36,
      Physical: 78,
    },
  },
  {
    id: 5,
    name: "Lamine Yamal",
    club: "Barcelona",
    nationality: "Espanha",
    position: "Atacante",
    statistics: {
      Overall: 89,
      Pace: 90,
      Shooting: 83,
      Passing: 82,
      Dribbling: 90,
      Defending: 30,
      Physical: 70,
    },
  },
  {
    id: 6,
    name: "Rodri",
    club: "Manchester City",
    nationality: "Espanha",
    position: "Meio-campista",
    statistics: {
      Overall: 89,
      Pace: 70,
      Shooting: 75,
      Passing: 85,
      Dribbling: 80,
      Defending: 85,
      Physical: 80,
    },
  },
  {
    id: 7,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egito",
    position: "Atacante",
    statistics: {
      Overall: 88,
      Pace: 93,
      Shooting: 86,
      Passing: 80,
      Dribbling: 89,
      Defending: 40,
      Physical: 75,
    },
  },
  {
    id: 8,
    name: "Harry Kane",
    club: "Bayern de Munique",
    nationality: "Inglaterra",
    position: "Atacante",
    statistics: {
      Overall: 88,
      Pace: 70,
      Shooting: 90,
      Passing: 83,
      Dribbling: 82,
      Defending: 45,
      Physical: 80,
    },
  },
  {
    id: 9,
    name: "Bukayo Saka",
    club: "Arsenal",
    nationality: "Inglaterra",
    position: "Atacante",
    statistics: {
      Overall: 87,
      Pace: 88,
      Shooting: 82,
      Passing: 85,
      Dribbling: 87,
      Defending: 60,
      Physical: 70,
    },
  },
  {
    id: 10,
    name: "Florian Wirtz",
    club: "Bayer Leverkusen",
    nationality: "Alemanha",
    position: "Meio-campista",
    statistics: {
      Overall: 87,
      Pace: 80,
      Shooting: 80,
      Passing: 85,
      Dribbling: 88,
      Defending: 55,
      Physical: 68,
    },
  },
  {
    id: 11,
    name: "Phil Foden",
    club: "Manchester City",
    nationality: "Inglaterra",
    position: "Meio-campista",
    statistics: {
      Overall: 87,
      Pace: 85,
      Shooting: 82,
      Passing: 86,
      Dribbling: 89,
      Defending: 50,
      Physical: 65,
    },
  },
  {
    id: 12,
    name: "Cole Palmer",
    club: "Chelsea",
    nationality: "Inglaterra",
    position: "Meio-campista",
    statistics: {
      Overall: 86,
      Pace: 82,
      Shooting: 80,
      Passing: 84,
      Dribbling: 87,
      Defending: 48,
      Physical: 66,
    },
  },
  {
    id: 13,
    name: "Federico Valverde",
    club: "Real Madrid",
    nationality: "Uruguai",
    position: "Meio-campista",
    statistics: {
      Overall: 86,
      Pace: 85,
      Shooting: 78,
      Passing: 82,
      Dribbling: 84,
      Defending: 75,
      Physical: 80,
    },
  },
  {
    id: 14,
    name: "Rodrygo",
    club: "Real Madrid",
    nationality: "Brasil",
    position: "Atacante",
    statistics: {
      Overall: 86,
      Pace: 90,
      Shooting: 83,
      Passing: 80,
      Dribbling: 88,
      Defending: 35,
      Physical: 70,
    },
  },
  {
    id: 15,
    name: "Declan Rice",
    club: "Arsenal",
    nationality: "Inglaterra",
    position: "Meio-campista",
    statistics: {
      Overall: 85,
      Pace: 75,
      Shooting: 70,
      Passing: 80,
      Dribbling: 78,
      Defending: 85,
      Physical: 82,
    },
  },
  {
    id: 16,
    name: "Martin Ødegaard",
    club: "Arsenal",
    nationality: "Noruega",
    position: "Meio-campista",
    statistics: {
      Overall: 85,
      Pace: 78,
      Shooting: 80,
      Passing: 88,
      Dribbling: 86,
      Defending: 50,
      Physical: 65,
    },
  },
  {
    id: 17,
    name: "Ronaldo Nazário",
    club: "Legend",
    nationality: "Brasil",
    position: "Atacante",
    statistics: {
      Overall: 98,
      Pace: 97,
      Shooting: 95,
      Passing: 85,
      Dribbling: 96,
      Defending: 40,
      Physical: 90,
    },
  },
  {
    id: 18,
    name: "Diego Maradona",
    club: "Legend",
    nationality: "Argentina",
    position: "Meio-campista",
    statistics: {
      Overall: 97,
      Pace: 92,
      Shooting: 95,
      Passing: 96,
      Dribbling: 98,
      Defending: 45,
      Physical: 80,
    },
  },
  {
    id: 19,
    name: "Zinedine Zidane",
    club: "Legend",
    nationality: "França",
    position: "Meio-campista",
    statistics: {
      Overall: 96,
      Pace: 85,
      Shooting: 90,
      Passing: 97,
      Dribbling: 94,
      Defending: 70,
      Physical: 85,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | null> => {
  return database.find((player) => player.id === id) || null;
};

export const insertPlayer = async (
  player: PlayerModel
): Promise<PlayerModel | null> => {
  const newPlayer = { ...player, id: database.length + 1 };

  database.push(newPlayer);

  return newPlayer;
}

export const deletePlayer = async (id: number): Promise<PlayerModel | null> => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex === -1) {
    return null;
  }

  const deletedPlayer = database.splice(playerIndex, 1);

  return deletedPlayer[0];
};

export const updatePlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel | null> => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex === -1) {
    return null;
  }

  database[playerIndex].statistics = statistics;

  return database[playerIndex];
};