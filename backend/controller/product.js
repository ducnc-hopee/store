const Product = require("../model/product");

module.exports.getAllProducts = (req, res) => {
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;
  Product.find()
    .limit(limit)
    .sort({ createdAt: sort })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

module.exports.getFiltersOptions = async (req, res) => {
	const allProducts = await Product.find().populate('categoryId');
  const categoriesMap = new Map();
  const brandsMap = new Map();
  const colorsMap = new Map();
  allProducts.forEach((product) => {
    if (product.categoryId && product.categoryId.name) {
			categoriesMap.set(
				product.categoryId.name,
				(categoriesMap.get(product.categoryId.name) || 0) + 1
			);
		}
    if (product.brand) {
      brandsMap.set(product.brand, (brandsMap.get(product.brand) || 0) + 1);
    }
    if (product.colors) {
      product.colors.forEach((color) => {
        colorsMap.set(color, (colorsMap.get(color) || 0) + 1);
      });
    }
  });

	const toArrayObject = (map) => {
		return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
	}

  res.json({ categories: toArrayObject(categoriesMap), brands: toArrayObject(brandsMap), colors: toArrayObject(colorsMap) });
};

module.exports.getProduct = (req, res) => {
  const id = req.params.id;

  Product.findOne({
    _id: id,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
};

module.exports.getProductsInCategory = (req, res) => {
  const categoryId = req.params.categoryId;
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  Product.find({
    categoryId: categoryId,
  })
    .limit(limit)
    .sort({ createdAt: sort })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

module.exports.addProduct = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "data is undefined",
    });
  }

  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports.editProduct = (req, res) => {
  if (typeof req.body == undefined || req.params.id == null) {
    res.json({
      status: "error",
      message: "something went wrong! check your sent data",
    });
  } else {
    Product.findOneAndUpdate(
      { _id: req.params.id, updatedAt: Date.now },
      req.body
    )
      .then((product) => {
        res.json(product);
      })
      .catch((err) => console.log(err));
  }
};

module.exports.deleteProduct = (req, res) => {
  if (req.params.id == null) {
    res.json({
      status: "error",
      message: "cart id should be provided",
    });
  } else {
    Product.findOneAndDelete({
      _id: req.params.id,
    })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => console.log(err));
  }
};
