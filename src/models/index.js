import Sequelize from "sequelize";

import movie from "./movie";

// TODO : maybe change to postgres
// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     dialect: 'postgres',
//   },
// );

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DATABASE_PATH,
});

const models = [movie];

models.forEach((model) => model(sequelize));

// export { sequelize };

export default sequelize;
