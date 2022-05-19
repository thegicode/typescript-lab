const express = require("express");

const app = express();
const port = 8000;

app.use(express.static(`${__dirname}/src`));

app.listen(port, () => {
  console.log(`Start : http://localhost:${port}`);
});
