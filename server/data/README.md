# Data API

## getAllSkillData()

Returns:

{
  skillData: {
    AI: number,
    WebDev: number,
    Cybersecurity: number,
    IoT: number
  },
  marketData: {
    AI: number,
    WebDev: number,
    Cybersecurity: number,
    IoT: number
  }
}

Usage:

const getAllSkillData = require("../data");

const data = await getAllSkillData();