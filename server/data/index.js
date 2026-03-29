const getSkillData = require("./skillData");
const fetchBrightData = require("./brightData");

const getAllSkillData = async () => {
  const skillData = await getSkillData();
  const brightData = await fetchBrightData();

  return {
    skillData,
    marketData: brightData
  };
};

module.exports = getAllSkillData;