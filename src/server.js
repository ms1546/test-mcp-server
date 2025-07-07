require('dotenv').config();
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const reviewService = require('./services/reviewService');

const app = express();
app.use(express.json());

app.post('/v1/mcp', async (req, res) => {
  const { prompt, context } = req.body;
  try {
    const review = await reviewService.generateReview({ prompt, context });
    res.json({ content: review });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to generate review' });
  }
});

app.listen(8080, () => {
  console.log('✅ MCP server running at http://localhost:8080');
});
