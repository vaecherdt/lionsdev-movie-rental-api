import { Router } from "express";
import {
    signup,
    login
} from "../controllers/user-controller.js";

import checkToken from "../middleware/check-token.js";
import checkRole from "../middleware/check-role.js";
import viaCep from "../middleware/via-cep.js";

const router = Router();

router.post("/signup", viaCep, signup);
router.post("/login", login);

export default router;
