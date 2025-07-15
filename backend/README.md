# Uncook Backend

Node.js + Express server for Uncook AI Coach (OpenAI GPT-4 proxy)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your Gemini API key:
   ```ini
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3001
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## Endpoint

- `POST /coach` — Proxy to OpenAI GPT-4
  - Body: `{ messages: [ { role: 'user', content: '...' }, ... ] }`
  - Response: `{ reply: '...' }`

---

**Keep your API key secret!** 

## Notes

- This backend now uses the Google Gemini API (https://ai.google.dev/). You must obtain a Gemini API key from Google AI Studio or the Google Cloud Console. 