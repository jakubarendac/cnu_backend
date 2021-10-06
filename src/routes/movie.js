import { Router } from "express";

import db from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const movies = await req.context.models.Movie.findAll();

  return res.send(movies);
});

router.get("/:movieId", (req, res) => {
  return res.send(`get movie with id ${req.params.movieId}`);
});

export default router;
