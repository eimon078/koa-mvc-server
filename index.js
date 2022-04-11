const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("./routes/koaRouter");

const app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.listen(8080, () => console.log("server running on port number 8080"));
