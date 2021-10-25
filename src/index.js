import "dotenv/config";
import cors from "cors";
import express from "express";

import sequelize from "./models";
import { populateDB } from "./helpers";
import routes from "./routes"
const app = express();

app.use(cors());

app.use((req, _, next) => {
  req.context = {
    models: sequelize.models,
  };
  next();
});

app.use("/recipes", routes.recipes)

// force -> reset database on start
sequelize.sync({ force: true }).then(() => {
  const port = process.env.PORT ? process.env.PORT : 3000;
  app.listen(port, () => {
    populateDB().then(() => {
      console.log(`Example app listening on port ${port}!`);
    });
  });
});
