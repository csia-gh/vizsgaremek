module.exports = (Model) => {
  return {
    findAll: () => Model.find({}),
    findOne: (id) => Model.findById(id),
    update: (id, updateData) =>
      Model.findByIdAndUpdate(id, updateData, { new: true }),
    create: (entity) => {
      const newEntity = new Model(entity);
      return newEntity.save();
    },
    delete: (id) => Model.findByIdAndRemove(id),
  };
};
