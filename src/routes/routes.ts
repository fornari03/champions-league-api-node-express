import { Router } from "express";
import * as PlayerController from "../controllers/player-controller";
import * as ClubController from "../controllers/club-controller";

const router = Router();

// Player routes

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.get("/players/club/:club", PlayerController.getPlayersByClubName);

router.patch("/players/:id", PlayerController.updatePlayer);

router.post("/players", PlayerController.postPlayer);

router.delete("/players/:id", PlayerController.deletePlayer);


// Club routes

router.get("/clubs", ClubController.getClubs);

export default router;
