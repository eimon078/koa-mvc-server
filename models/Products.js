const products = [
  { id: 1, productName: "Orange", productPrice: 150 },
  { id: 2, productName: "Apple", productPrice: 130 },
  { id: 3, productName: "Grage", productPrice: 280 },
];

exports.getProductsFromDB = () => products;
exports.addProductsToDB = (product) => {
  let status = null;
  if (product.id) {
    products.push(product);
    status = 200;
  } else {
    status = 204;
  }
  return status;
};

exports.deleteProductFromDB = (id) => {
  let status = null;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) {
    status = "Data Not found";
  } else {
    delete products[index];
    status = "Data Deleted";
  }

  return status;
};
exports.updateProductFromDB = (product) => {
  let status = null;
  const index = products.findIndex((item) => item.id == product.id);
  if (index === -1) {
    products.push(product);
    status = "New Product Added";
  } else {
    products[index] = product;
    status = "Product Updated";
  }

  return status;
};
