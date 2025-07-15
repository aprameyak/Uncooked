# Uncook — Mindful Break & Focus App

A React Native mobile application designed to help users overcome digital burnout and doomscrolling by providing gentle nudges, personalized micro-mindfulness exercises, and AI-powered coaching to restore attention and improve mental wellbeing.

---

## Project Overview

Uncook helps users:

- Detect prolonged scrolling or addictive app usage
- Interrupt with gentle, supportive nudges
- Offer short mindfulness exercises (1–3 min)
- Track digital usage and suggest personalized “digital diets”
- Provide an AI-powered conversational coach
- Enable Focus Mode to restrict distracting apps
- Collect mood and attention data for self-awareness

---

## Key Features (MVP)

1. **Scroll & Usage Detection** (Android MVP)
2. **Smart Nudges** (Push notifications, in-app modals)
3. **Micro-Mindfulness Exercises** (Guided, interactive, 1–3 min)
4. **Digital Diet Tracking** (Screen time, app categories, goals)
5. **Focus Mode** (Timer-based, motivational reminders)
6. **Mood & Attention Journal** (Quick prompts, trends)
7. **AI-Powered Coach** (Conversational UI, OpenAI backend)

---

## Tech Stack

- **Frontend:** React Native (Expo, TypeScript)
- **State:** Redux Toolkit
- **Navigation:** React Navigation
- **Notifications:** Expo Notifications
- **Storage:** AsyncStorage
- **Backend:** Node.js + Express (Gemini proxy)
- **AI:** Google Gemini API

---

## Folder Structure

```
/src
  /components        # Reusable UI components
  /screens           # App screens (Home, Mindfulness, Journal, Coach, Settings)
  /navigation        # Navigation setup
  /store             # Redux Toolkit store
  /services          # API clients, notifications, usage tracking
  /assets            # Images, audio, fonts
  /utils             # Helpers
```

---

## Setup Instructions

1. **Clone & Install**

   ```bash
   git clone https://github.com/yourusername/uncook.git
   cd uncook
   npm install
   ```

2. **Environment Variables**
   - Create a `.env` file:

     ```ini
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

3. **Run the App**

   ```bash
   npx expo start
   ```

4. **Backend Server**
   - See `/backend` for Node.js Express server setup.

---

## Contribution

Open to contributions — fork, add features or fixes, and submit pull requests. Report issues for bugs or ideas.

## License

MIT License © 2025 Your Name
