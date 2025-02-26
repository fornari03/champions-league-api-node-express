import { playersArray } from "../assets/players-database";
import { clubsArray } from "../assets/clubs-database";
import { db } from "../data/connect";

const responsePlayers = db.collection("players").insertMany(playersArray);
const responseClubs = db.collection("clubs").insertMany(clubsArray);
