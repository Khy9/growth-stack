# Server Integration Guide

## Data Layer Ready

Use:

const getAllSkillData = require("./data");

const data = await getAllSkillData();

## Available Route

GET /api/skills

Returns:

{
  success: true,
  data: {
    skillData,
    marketData
  }
}