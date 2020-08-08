const mongoose = require("mongoose");
const Order = mongoose.Schema({
  Product_Name: String,
  Product_Category: String,
  Product_Qty: Number,
  Product_Price: Number,
  Product_Total:Number,
  Customer_Phone:Number
});

const collectionName = "OrderList";
module.exports = mongoose.model("Order", Order, collectionName);