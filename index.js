const express = require("express");
const app = express();
//const body_Parser = require("body-parser");
//const bodyParser = body_Parser.urlencoded({ extended: false });
const productRouter = require("./routes/Products");

app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("home", {
    name: "World!",
    users: [
      { name: "Stephen Brown", email: "sbrown2@student.fullsail.edu" },
      { name: "Brittany Brown", email: "bbrown@email.com" },
      { name: "Connor Brown", email: "cbrown@email.com" },
      { name: "Lacey Brown", email: "lbrown@email.com" },
    ],
  });
});

//app.use(bodyParser);
app.use("/products", productRouter);
app.listen(3000);

//comenting out old code for future reference.
/*
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
*/