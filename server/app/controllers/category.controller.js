const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    // Check if it already exists
    const existing = await prisma.category.findUnique({
      where: { name }
    });

    if (existing) {
      return res.status(200).json({ success: true, category: existing }); // Return existing instead of error
    }

    const category = await prisma.category.create({
      data: { name }
    });

    res.status(201).json({ success: true, category });
  } catch (error) {
    console.error('Create category error:', error);
    res.status(500).json({ error: 'Failed to create category' });
  }
};

module.exports = {
  getCategories,
  createCategory
};
