import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const ingredient = (sequelize) => {
  const ingredient = sequelize.define("ingredient", {
    title: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    unit: {
      type: DataTypes.STRING,
    },
  });

  return ingredient;
};

export default ingredient;
