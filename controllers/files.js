const { getVideoFromDB } = require("../models/files");

exports.getVideo = async (ctx) => {
  let range = ctx.header.range;
  ctx.status = 200;
  ctx.set("Content-Type", "video/mp4");
  const getData = await getVideoFromDB(ctx);
  ctx.body = getData;
};
