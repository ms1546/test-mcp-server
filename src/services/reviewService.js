const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function generateReview({ prompt, context }) {
  const promptTemplate = fs.readFileSync(
    path.join(__dirname, '../../prompts/code_review.md'),
    'utf8'
  );
  const finalPrompt = `${promptTemplate}\n\n${context}\n\nユーザーからの依頼：${prompt}`;

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
  return response.data.choices[0].message.content;
}

module.exports = { generateReview };
