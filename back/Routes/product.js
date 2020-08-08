const express = require("express");
const router = express.Router();
const ProductData = require("../Models/Product");
router.post("/productlist", (req, res) => {
  ProductData.find({})
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        message: "Data get success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
 
});

module.exports = router;
