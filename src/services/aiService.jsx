// services/aiService.js
const { Configuration, OpenAIApi } = require('openai');
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

// Example: Turn prompt into segment rules
exports.nlpToRules = async (prompt) => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "user", content: `Convert this to rules: ${prompt}` }],
  });

  const rules = JSON.parse(completion.data.choices[0].message.content);
  return rules;
};

// Example: Generate messages
exports.suggestMessages = async (goal) => {
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "user", content: `Generate 3 promotional messages for: ${goal}` }],
  });

  return res.data.choices[0].message.content.split('\n').filter(line => line.trim());
};
