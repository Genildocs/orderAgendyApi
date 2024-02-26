const Ordem = require("../models/orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Ordem.find();
    res.status(200).json({
      status: "success",
      results: orders.length,
      data: orders,
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

exports.getOrder = async (req, res) => {
  const ordersId = await Ordem.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: ordersId,
  });
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Ordem.create(req.body);
    res.status(201).json({
      status: "success",
      data: newOrder,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const updatedOrder = await Ordem.findByIdAndUpdate(id);
  updatedOrder.save();
  res.status(200).json({
    status: "success",
  });
};

exports.deleteOrder = async (req, res) => {
  await Ordem.findByIdAndDelete(req.params._id);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
