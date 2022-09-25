const express = require("express");
const app = express();
const body_Parser = require("body-parser");
const bodyParser = body_Parser.urlencoded({ extended: false });

const fileUpload = require('express-fileupload')
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))

const productRouter = require("./routes/Products");
const variantsRouter = require("./routes/Variants");
const imagesRouter = require("./routes/Images");
app.use(bodyParser);
app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.use('/public', express.static('public'))

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);