const Order = require('../../model/order');

exports.findAll = () => Order.find();

exports.findOne = (id) => Order.findById(id);

exports.update = (id, updateData) =>
  Order.findByIdAndUpdate(id, updateData, { new: true });

exports.create = (order) => {
  const newOrder = new Order(product);
  return newOrder.save();
};

exports.delete = (id) => Order.findByIdAndRemove(id);
