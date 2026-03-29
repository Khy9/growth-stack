const generateRecommendation = async (data) => {

  const { skillData, marketData } = data;

  let recommendation = [];

  for (let skill in skillData) {

    const interest = skillData[skill];
    const demand = marketData[skill]?.demand || 0;

    if (interest >= 7 && demand > 8000) {
      recommendation.push(`Focus more on ${skill}`);
    }

  }

  return recommendation;
};

module.exports = generateRecommendation;