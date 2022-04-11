const Router = require("koa-router");
const { getVideo } = require("../controllers/files");
const {
  getAllProduct,
  addProducts,
  deleteProducts,
  updateProducts,
} = require("../controllers/Products");

const router = new Router();

router.get(
  "/",
  (ctx) => (ctx.body = { message: "Welcome to products API version 2.0" })
);
router.get("/products", getAllProduct);
router.post("/products", addProducts);
router.delete("/products/:pId", deleteProducts);
router.put("/products", updateProducts);
router.get("/videoFile", getVideo);

module.exports = router;
