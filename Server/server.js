const express = require("express");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/db");
const app = express();

require("dotenv").config();

// Connecting to database

connectDB();

// For parseing data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

// Routers defined

const RetailerRouter = require("./routes/retailer");
const CustomerRouter = require("./routes/customer");
app.use("/retailer", RetailerRouter);
app.use("/customer", CustomerRouter);

// Ended

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
