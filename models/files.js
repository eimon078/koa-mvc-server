const fs = require("fs");

exports.getVideoFromDB = (ctx) => {
  const readStream = fs.createReadStream(`${__dirname}/sample-30s.mp4`);
  return readStream;
};
