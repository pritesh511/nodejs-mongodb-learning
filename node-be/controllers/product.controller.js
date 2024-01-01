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
      const newBody = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount,
        totalPrice: req.body.price - req.body.discount,
        image: req.body.image,
      };
      const product = await productService.createProduct(newBody);
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

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.query.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
