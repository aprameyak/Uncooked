require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

app.post('/coach', async (req, res) => {
  const { messages } = req.body;
  if (!messages) return res.status(400).json({ error: 'No messages provided' });
  try {
    // Gemini expects a different message format: [{role: 'user', parts: [{text: '...'}]}]
    // We'll concatenate the messages for a single prompt for simplicity
    const userPrompt = messages.map(m => m.content).join('\n');
    const geminiRequest = {
      contents: [
        {
          role: 'user',
          parts: [{ text: userPrompt }],
        },
      ],
    };
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiRequest),
    });
    if (!response.ok) {
      const error = await response.json();
      return res.status(500).json({ error: error.error?.message || 'Gemini API error' });
    }
    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Uncook backend listening on port ${PORT}`);
}); 