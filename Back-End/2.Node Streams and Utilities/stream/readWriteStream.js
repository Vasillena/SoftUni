const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("./data-copy.txt");

readStream.on("data", (chunk) => {
  console.log("Write chunk");
  writeStream.write(chunk);
});

readStream.on("close", () => {
  writeStream.end();
});
