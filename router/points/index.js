import express from "express";
import { getStudyPoints } from "./point.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", getStudyPoints);

export default router;
