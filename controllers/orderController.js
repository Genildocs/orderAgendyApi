exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({
      status: "fail",
    });
  }
  next();
};
exports.getAllOrders = async (req, res) => {
  res.status(200).json({
    status: "success",
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
  res.status(201).json({
    status: "success",
  });
};

exports.updateOrder = async (req, res) => {
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
