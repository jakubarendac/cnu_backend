import { DataTypes } from "sequelize";

const movie = (sequelize) => {
  const Movie = sequelize.define("Movie", {
    title: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // TODO : could be shorthand
    text: {
      type: DataTypes.STRING,
    },
  });

  return Movie;
};

export default movie;
