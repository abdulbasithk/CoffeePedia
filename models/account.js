'use strict';
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model {
    validPassword(password) {
      return bcrypt.compareSync(password, this.password)
    }
  }
  Account.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {
    sequelize,
  })
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};