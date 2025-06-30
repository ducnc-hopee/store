const Category = require("../model/category");
const product = require("../model/product");

// get all categories
module.exports.getAllCategories = (req, res) => {
  Category.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => console.log(err));
};

// get category by id
module.exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findOne({ _id: id })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
};

// create category
module.exports.createCategory = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "data is undefined",
    });
  }

  try {
    const category = await Category.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "category created successfully",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "failed to create category",
      error: err.message,
    });
  }
};

// update category
module.exports.updateCategory = async (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "data is undefined",
    });
  }
  try {
    const category = await Category.findOneAndUpdate({ _id: id }, req.body);
    return res.status(200).json({
      status: "success",
      message: "category updated successfully",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "failed to update category",
      error: err.message,
    });
  }
};

// delete category
module.exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "id is undefined",
    });
  }
  try {
    const category = await Category.findOneAndDelete({ _id: id });
    return res.status(200).json({
      status: "success",
      message: "category deleted successfully",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "failed to delete category",
      error: err.message,
    });
  }
};