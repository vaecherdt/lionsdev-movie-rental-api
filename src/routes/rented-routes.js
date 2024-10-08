import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy
} from "../controllers/rented-controller.js";

import checkToken from "../middleware/check-token.js";
import checkRole from "../middleware/check-role.js";
import validateAgeForMovie from "../middleware/check-age.js";

const router = Router();

router.post("/", checkToken, validateAgeForMovie, store);
router.get("/", checkToken, index);
router.get("/:id", checkToken, show);
router.put("/:id", checkToken, update);
router.delete("/:id", checkToken, checkRole('ADMIN'), destroy);

export default router;
