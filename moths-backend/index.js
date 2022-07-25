const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
