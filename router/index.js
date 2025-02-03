import express from "express";
import studyRouter from "./studies/index.js";
import pointRouter from "./points/index.js";
const router = express.Router();

router.use("/studies", studyRouter);
router.use("/:studyId/points", pointRouter);
export default router;
