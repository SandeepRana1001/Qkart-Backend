const { Product } = require("../models");

/**
 * Get Product by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getProductById = async (id) => {
  return Product.findById(id);
};

/**
 * Fetch all products
 * @returns {Promise<List<Products>>}
 */
const getProducts = async () => {
  return Product.find({});
};

/**
 * Create product
 * @params {Object} productObj
*/

const createProduct = async (productObj) => {
  const product = new Product(productObj)
  await product.save();
}

module.exports = {
  getProductById,
  getProducts,
  createProduct
};
