exports.getAllOrders = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.getOrder = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.createOrder = async (req, res) => {
  res.status(201).json({
    status: 'success',
  });
};

exports.updateOrder = async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteOrder = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
