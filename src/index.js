import "dotenv/config";
import cors from "cors";
import express from "express";
import pino from 'pino-http';

import sequelize from "./models";
import { populateDB } from "./helpers";
import bodyParser from "body-parser"

import routes from "./routes"

const app = express();

app.use(cors());
app.use(pino())
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use((req, _, next) => {
  req.context = {
    models: sequelize.models,
  };
  next();
});

app.use('/recipes', routes.recipes)

app.all('*', (_, res)=> { 
  res.sendStatus(404)
})
// force -> reset database on start
sequelize.sync({ force: true }).then(() => {
  const port = process.env.PORT ? process.env.PORT : 3000;
  app.listen(port, () => {
    populateDB().then(() => {
      console.log(`Example app listening on port ${port}!`);
    });
  });
});
