import { Router } from "express";

import { analyzeProject } from "../controllers/analyzer.controller";

const router = Router();

router.post("/", analyzeProject);

export default router;