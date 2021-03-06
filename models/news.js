'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      News.belongsTo(models.Category, { as: 'category' });
      News.hasMany(models.Comment);
    }
  }
  News.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      type: { type: DataTypes.STRING, defaultValue: 'news' },
      categoryId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'News',
      paranoid: true
    }
  );
  return News;
};
