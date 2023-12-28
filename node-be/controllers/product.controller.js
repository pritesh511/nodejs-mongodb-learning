const productService = require("../services/product.service");

exports.createProduct = async (req, res) => {
  try {
    if (req.body.name == "") {
      res
        .status(500)
        .json({ message: "Please enter product name", status: 500 });
    } else if (req.body.description == "") {
      res
        .status(500)
        .json({ message: "Please enter product description", status: 500 });
    } else if (req.body.price == 0) {
      res
        .status(500)
        .json({ message: "Please enter product price", status: 500 });
    } else if (req.body.image == "") {
      res.status(500).json({ message: "Please enter image url", status: 500 });
    } else {
      const product = await productService.createProduct(req.body);
      res.status(200).json({
        data: product,
        message: "Product created successfully",
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProduct = async (_req, res) => {
  try {
    const productList = await productService.getAllProduct();
    res.status(200).json({ data: productList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
