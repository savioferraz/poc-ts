import express from "express";

const router = express.Router();

router.post("/task");
router.get("/task");
router.delete("/task/:id");
router.put("task/:id");

export default router;
