'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.hasMany(models.Slide, { foreignKey: 'organizationId' });
    }
  }
  Organization.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      welcomeText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      aboutUsText: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      facebookUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      linkedinUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      instagramUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true
    }
  );
  return Organization;
};
