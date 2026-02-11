const express = require("express");
const app = express();
const port = app.use(
  express.json({
    limit: "100mb",
  }),
);



app.use("/health-check", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: `server is running up port :${port}`,
  });
});



module.exports = app;
