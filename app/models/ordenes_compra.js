module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("ordenes", {
    total: {type: Sequelize.DECIMAL},
    subtotal:  {type: Sequelize.DECIMAL},
    iva: { type: Sequelize.DECIMAL}
  });
  return Order;
};