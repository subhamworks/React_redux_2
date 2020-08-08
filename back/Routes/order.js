const express = require("express");
const router = express.Router();
const OrderData = require("../Models/Order");
router.post("/orderlist", (req, res) => {
  const {
    Product_Name,
    Product_Category,
    Product_Qty,
    Product_Price,
    Product_Total,
    Customer_Phone,
  } = req.body;
  const orderData = new OrderData({
    Product_Name: Product_Name,
    Product_Category: Product_Category,
    Product_Qty: Product_Qty,
    Product_Price: Product_Price,
    Product_Total: Product_Total,
    Customer_Phone: Customer_Phone,
  });
  orderData
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Order insert success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.get("/allOrderGet", (req, res) => {
  OrderData.find({})
    .exec()
    .then((data) => {
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
router.get("/allOrderGet/:id", (req, res) => {
  const id = req.params.id;
  OrderData.find({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "One Data get success",
        data: result,
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
