const productService = require("../services/product.service");

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res
      .status(200)
      .json({ data: product, message: "Product created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
