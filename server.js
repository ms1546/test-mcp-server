require('dotenv').config();
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/v1/mcp', async (req, res) => {
  const { prompt, context } = req.body;

  const promptTemplate = fs.readFileSync(
    path.join(__dirname, 'prompts/code_review.md'),
    'utf8'
  );
s
  const finalPrompt = `${promptTemplate}\n\n${context}\n\nユーザーからの依頼：${prompt}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'あなたは厳格なコードレビューボットです。' },
          { role: 'user', content: finalPrompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    res.json({ content: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to call OpenAI API' });
  }
});

app.listen(8080, () => {
  console.log('✅ MCP server running at http://localhost:8080');
});
