const fetchBrightData = async () => {

  const marketTrends = {
    AI: {
      demand: 12000,
      growth: "High"
    },
    WebDev: {
      demand: 9000,
      growth: "Medium"
    },
    Cybersecurity: {
      demand: 8000,
      growth: "High"
    },
    IoT: {
      demand: 5000,
      growth: "Medium"
    }
  };

  return marketTrends;
};

module.exports = fetchBrightData;