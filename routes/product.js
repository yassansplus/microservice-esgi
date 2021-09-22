var express = require("express");
const { listProducts, createProduct } = require("../product");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  try {
    const products = listProducts();
    res.send(products);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/", function (req, res) {
  const data = req.body;
  console.log({ data });
  try {
    const product = createProduct(data);
    res.send(product);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;