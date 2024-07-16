import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  newPlace,
  getPlace,
  getallPlaces,
  gotPlaces,
  updatePlace,
  deletePlace,
} from "../controllers/place.js";

const router = express.Router();

router.post("/newplace", isAuthenticated, newPlace);

router.get("/plac", isAuthenticated, getPlace);

router
  .route("/place/:id")

  .get(isAuthenticated, gotPlaces)

  .put(isAuthenticated, updatePlace);

router.get("/allplaces", getallPlaces);

router.delete("/deleteplace/:id", isAuthenticated, deletePlace);

export default router;
