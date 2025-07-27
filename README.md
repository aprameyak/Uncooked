# Uncook — Digital Wellness App

A React Native mobile application designed to help users develop mindfulness practices, improve focus, and build healthier digital habits through guided exercises, professional coaching, and wellness tracking.

---

## Project Overview

Uncook helps users:

- **Develop mindfulness practices** through guided exercises
- **Improve focus and concentration** with structured training sessions
- **Track wellness progress** with detailed journaling and insights
- **Get professional guidance** through AI-powered wellness coaching
- **Build consistent habits** with progress tracking and milestones
- **Enhance mental clarity** through mindful living practices

---

## Key Features (Working)

1. **Wellness Dashboard** - Track mindful time, sessions, and progress
2. **Mindfulness Exercises** - 6 guided practices (2-6 min sessions)
3. **Wellness Coach** - Professional AI guidance for mindfulness and focus
4. **Wellness Journal** - Track mood, attention quality, and milestones
5. **Focus Mode** - Timer-based sessions (15-90 min) for concentration training
6. **7-Day Wellness Challenge** - Structured mindfulness program
7. **Progress Tracking** - Visual feedback on focus and wellness improvements

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
  /screens           # App screens (Home, Mindfulness, Coach, Journal, Focus)
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

## How It Helps

### **Mindfulness Development**
- Guided breathing and meditation exercises
- Progressive focus training sessions
- Mindful awareness practices
- Stress reduction techniques

### **Focus Enhancement**
- Structured concentration training (15-90 min)
- Single-task focus development
- Distraction management strategies
- Neural pathway strengthening

### **Wellness Coaching**
- Personalized AI conversations
- Evidence-based mindfulness guidance
- Progress tracking and insights
- Habit formation support

---

## iOS Deployment Ready

- ✅ Native iOS project generated
- ✅ All dependencies installed and configured
- ✅ Professional UI/UX design
- ✅ Working backend integration
- ✅ Complete wellness companion

---

## Contribution

Open to contributions — fork, add features or fixes, and submit pull requests. Report issues for bugs or ideas.

## License

MIT License © 2025 Your Name
