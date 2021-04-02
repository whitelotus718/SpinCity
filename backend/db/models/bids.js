'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bids.belongsTo(models.User, { foreignKey: 'userId' });
      Bids.belongsTo(models.Events, { foreignKey: 'eventId' });
      
    }
  };
  Bids.init({
    eventId: {type: DataTypes.INTEGER, allowNull: false,},
    userId: {type: DataTypes.INTEGER, allowNull: false,},
    date: {type: DataTypes.STRING, allowNull: false,}, 
    isAccepted: {type: DataTypes.BOOLEAN, allowNull: false,} 
  }, {
    sequelize,
    modelName: 'Bids',
  });
  return Bids;
};