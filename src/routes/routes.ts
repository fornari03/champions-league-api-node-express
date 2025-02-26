import { Router } from "express";
import * as PlayerController from "../controllers/player-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.post("/players", PlayerController.postPlayer);

export default router;
