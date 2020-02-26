'use strict';
module.exports = (sequelize, DataTypes) => {
  class Customer extends sequelize.Sequelize.Model {
    validPassword(password) {
      return bcrypt.compareSync(password, this.password)
    }
  }

  Customer.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    money: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    sequelize
  })
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Coffee, { through: models.CoffeeCustomer })
  };
  return Customer;
};