const path = require("path");
const express = require("express");
const app = express();

/**
 * STATIC FILES
 */

const publicDirectoryPath = path.join(__dirname, "public");
app.use("/", express.static(publicDirectoryPath));

// Default every route except the above to serve the index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});
module.exports = app;
