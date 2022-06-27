'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'productos',
  });
  return Productos;
};