const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./src/Configs/db");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 100000000000,
  })
);

const productController = require("./src/Controllers/product.controller");
const cartController = require("./src/Controllers/cart.controller");

app.use("/products", productController);
app.use("/cart", cartController);
app.use(express.static("public"));

app.listen(process.env.PORT || 8080, async () => {
  await connect();
  console.log("Listining to port 8080");
});