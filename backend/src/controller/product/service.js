const Product = require('../../model/product');

exports.findAll = () => Product.find();

exports.findOne = (id) => Product.findById(id);

exports.update = (id, updateData) =>
  Product.findByIdAndUpdate(id, updateData, { new: true });

exports.create = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

exports.delete = (id) => Product.findByIdAndRemove(id);
