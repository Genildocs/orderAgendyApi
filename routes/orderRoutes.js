const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Order id is: ${val}`);
  next();
});

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);
router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
