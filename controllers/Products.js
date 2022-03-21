const {
  getProductsFromDB,
  addProductsToDB,
  deleteProductFromDB,
  updateProductFromDB,
} = require("../models/Products");

exports.getAllProduct = async (ctx) => {
  const productList = await getProductsFromDB();
  const response = JSON.stringify({ status: 200, products: productList });
  ctx.res.end(response);
};

exports.addProducts = async (ctx) => {
  console.log(ctx.request.body, "hi");
  const status = await addProductsToDB(ctx.request.body);
  ctx.res.end(JSON.stringify({ status }));
};

exports.deleteProducts = async (ctx) => {
  console.log(ctx.request.params);
  const status = await deleteProductFromDB(ctx.request.params?.pId);
  ctx.res.end(JSON.stringify({ status }));
};

exports.updateProducts = async (ctx) => {
  console.log(ctx.request.body);
  const status = await updateProductFromDB(ctx.request.body);
  ctx.res.end(JSON.stringify({ status }));
};
