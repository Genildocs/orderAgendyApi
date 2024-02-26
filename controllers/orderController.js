const Ordem = require("../models/orderModel");

exports.getAllOrders = async (req, res) => {
  const orders = await Ordem.find();
  res.status(200).json({
    status: "success",
    results: orders.length,
    data: orders,
  });
};

exports.getOrder = async (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: "success",
    data: id,
  });
};

exports.createOrder = async (req, res) => {
  const newOrder = await Ordem.create(req.body);
  newOrder.save();
  res.status(201).json({
    status: "success",
  });
};

exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const updatedOrder = await Ordem.findByIdAndUpdate(id);
  updatedOrder.save();
  res.status(200).json({
    status: "success",
  });
};

exports.deleteOrder = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
