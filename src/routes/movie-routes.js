import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/movie-controller.js";

import checkToken from "../middleware/check-token.js";
import checkRole from "../middleware/check-role.js";

const router = Router();

router.post("/", checkToken, checkRole('ADMIN'), store);
router.get("/", checkToken, index);
router.get("/:id", checkToken, show);
router.put("/:id", checkToken, checkRole('ADMIN'), update);
router.delete("/:id", checkToken, checkRole('ADMIN'), destroy);

export default router;
