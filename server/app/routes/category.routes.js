const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { verifyAdmin } = require('../middleware/auth.middleware');

router.get('/', verifyAdmin, categoryController.getCategories);
router.post('/', verifyAdmin, categoryController.createCategory);

module.exports = router;
