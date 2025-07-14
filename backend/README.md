# Uncook Backend

Node.js + Express server for Uncook AI Coach (OpenAI GPT-4 proxy)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file:
   ```ini
   OPENAI_API_KEY=your_openai_key_here
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