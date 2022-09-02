const express = require("express");
const app = express();
const body_Parser = require("body-parser");
const bodyParser = body_Parser.urlencoded({ extended: false });
const productRouter = require("./routes/Products");

app.use(bodyParser);
app.use("/products", productRouter);

//GET /products/all HTTP/1.1
//Page: 2
//Sort: price
//Order: desc
//Expected curl response: GET Products: 2, price, desc
app.get("/products/all", (req, res) => {
  res.send(`GET Products: ${req.headers.page}, ${req.headers.sort}, ${req.headers.order}`);
});

//GET /products/8719-small-red HTTP/1.1
//Expected curl response: GET Products: 8719, small, red
app.get("/products/:num-:size-:color", (req, res) => {
 res.send(`GET Products: ${req.params.num}, ${req.params.size}, ${req.params.color}`);
});

//GET /products/8719 HTTP/1.1
//Expected curl response: GET Products: 8719
app.get("/products/:num", (req, res) => {
  res.send(`GET Products: ${req.params.num}`);
});

app.listen(3000);