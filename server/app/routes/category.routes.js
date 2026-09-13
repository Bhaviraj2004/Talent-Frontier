const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { requireAuth } = require('../middlewares/auth.middleware');

router.get('/', requireAuth, categoryController.getCategories);
router.post('/', requireAuth, categoryController.createCategory);

module.exports = router;
