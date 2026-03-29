const express = require("express");
const router = express.Router();

const getAllSkillData = require("../data");
const generateRecommendation = require("../ai/recommend");

router.get("/skills", async (req, res) => {
  try {

    const data = await getAllSkillData();

    const recommendation = await generateRecommendation(data);

    res.json({
      success: true,
      data,
      recommendation
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
});

module.exports = router;