const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });

    if (!categories) {
      res.status(404).json({ message: "Categories not found" });
      return;
    }

    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      include: Product,
    });

    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const newCat = await Category.create({
      category_name: req.body.category_name,
    });
    res
      .status(201)
      .json({ message: `New category created: ${req.body.category_name} ` });

    if (!newCat) {
      res.status(404).json({ message: "Category could not be created " });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id } });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const name = req.body.category_name;
    const catUpdate = await Category.update(
      { category_name: name },
      { where: { id: req.params.id } }
    );

    if (catUpdate[0] > 0) {
      res.status(201).json({ message: `Category updated ` });
    } else {
      res.status(404).json({ message: "Category could not be updated" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.info(category);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(201).json({ message: "Category deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
