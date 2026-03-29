const getSkillData = require("./skillData");
const fetchBrightData = require("./brightData");

const getAllSkillData = async () => {
  try {
    const skillData = await getSkillData();
    const marketData = await fetchBrightData();

    return {
      success: true,
      data: {
        skillData,
        marketData
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }const getSkillData = require("./skillData");
const fetchBrightData = require("./brightData");

const getAllSkillData = async () => {
  try {

    const skillData = await getSkillData();
    const marketData = await fetchBrightData();

    return {
      skillData,
      marketData
    };

  } catch (error) {
    throw error;
  }
};

module.exports = getAllSkillData;
};

module.exports = getAllSkillData;