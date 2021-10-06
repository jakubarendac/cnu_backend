import "dotenv/config";
import cors from "cors";
import express from "express";

import routes from "./routes";
import sequelize from "./models";

const app = express();

app.use(cors());

app.use((req, _, next) => {
  req.context = {
    models: sequelize.models,
  };
  next();
});

app.use("/movies", routes.movie);

// const createMovies = async () => {
//   await sequelize.models.Movie.create({
//     title: "Titanic",
//     text: "dlhy text titanic",
//   });
// };

// force -> reset database on start
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    // createMovies();
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
