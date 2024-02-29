const Ordem = require('../models/orderModel');

exports.getAllOrders = async (req, res) => {
  try {
    //Build query
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let query = Ordem.find(queryObj);
    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

    //Execute query
    const orders = await query;

    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: orders,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const ordersId = await Ordem.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: ordersId,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Ordem.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newOrder,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Ordem.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: updatedOrder,
    });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Ordem.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(204).json({ status: 'fail', message: error });
  }
};
