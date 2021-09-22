const { products, productCreator } = require("./model");

const createProduct = (data) => {
  const product = productCreator(data);
  return product;
};

const listProducts = (id) => {
  const res = id ? products.find(({ id: _id }) => id === _id) : products;

  if (!res) throw new Error("Couldn't find the product");

  return res;
};

module.exports = {
  listProducts,
  createProduct,
};