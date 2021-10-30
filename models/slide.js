'use strict';
const { Model } = require('sequelize');
const { Organization } = require('./organization')
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slide.hasOne(Organization, {
        foreignKey: 'organizationId'
      });
    }

  };
  Slide.init({
    imageUrl: DataTypes.STRING,
    text: DataTypes.STRING,
    order: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Slide',
    timestamps
  });
  return Slide;
};