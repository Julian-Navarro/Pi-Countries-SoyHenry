const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        unique: true,
        allowNull: false,
        validate: {
          len: [3],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      population: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
