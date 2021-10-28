import Sequelize from "sequelize";

import recipe from "./recipe";
import ingredient from "./ingredient";

function applyRelations(sequelize) {
  const { ingredient, recipe } = sequelize.models;

  ingredient.belongsToMany(recipe, { through: "recipeIngredients" });
  recipe.belongsToMany(ingredient, { through: "recipeIngredients" });
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: 'db.sqlite',
  logging: false,
});

const models = [recipe, ingredient];

models.forEach((model) => model(sequelize));

applyRelations(sequelize);

export default sequelize;
