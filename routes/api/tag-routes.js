const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: Product,
    });
    if (!tags) {
      res.status(404).json({ message: "Tags not found" });
      return;
    }
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: Product,
    });

    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create({ tag_name: req.body.tag_name });
    console.info(newTag);
    res
      .status(201)
      .json({ message: `New tag created: ${req.body.tag_name} ` });

    if (!newTag) {
      res.status(404).json({ message: "Tag could not be created " });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.findOne({ where: { id: req.params.id } });

    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    const name = req.body.tag_name;
    const tagUpdate = await Tag.update(
      { tag_name: name },
      { where: { id: req.params.id } }
    );

    console.info(name);
    console.info(tagUpdate);

    if (tagUpdate[0] > 0) {
      res.status(201).json({ message: "Tag Updated" });
    } else {
      res.status(404).json({ message: "Tag could not be updated" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: "Tag could not be deleted" });
    }

    res.json(deletedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  // delete on tag by its `id` value
});

module.exports = router;
