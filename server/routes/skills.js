const express = require("express");
const router = express.Router();

const getAllSkillData = require("../data");

router.get("/skills", async (req, res) => {
  try {
    const data = await getAllSkillData();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;