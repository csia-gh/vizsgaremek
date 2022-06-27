const Category = require('../../model/category');

exports.findAll = () => Category.find();

exports.findOne = (id) => Category.findById(id);

exports.update = (id, updateData) =>
  Category.findByIdAndUpdate(id, updateData, { new: true });

exports.create = async (category) => {
  const newCat = new Category(category);
  const saved = await newCat.save();
  return Category.findById(saved._id);
};

exports.delete = (id) => Category.findByIdAndRemove(id);
