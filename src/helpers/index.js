import sequelize from "../models";

export async function populateDB() {
  await sequelize.models.ingredient.bulkCreate([
    {
      title: "salt",
      unit: "g",
    },
    {
      title: "water",
      unit: "ml",
    },
    {
      title: "meat",
      unit: "g",
    },
    {
      title: "flour",
      unit: "g",
    },
  ]);
  // const ingredients = await sequelize.models.ingredient.findAll();
  await sequelize.models.recipe.bulkCreate([
    {
      title: "Simple stew",
      text: "Just put meat into water with salt",
    },
  ]);
  await sequelize.models.recipeIngredients.bulkCreate([
    {
      recipeId: 1,
      ingredientId: 1,
    },
    {
      recipeId: 1,
      ingredientId: 2,
    },
    {
      recipeId: 1,
      ingredientId: 3,
    },
  ]);

  // const recipesWithIngredients = await sequelize.models.recipe.findAll({
  //   include: [{ model: sequelize.models.ingredient, as: "ingredients" }],
  // });
}
