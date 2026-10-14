# Bschat — Modern Premium Messaging Platform

A polished, mobile-first chat interface with banking, status, and call features (WhatsApp-inspired).

## Features

- **Chat list** with avatars, online status indicators, and unread badges
- **Full conversation view** with message bubbles (sent / received)
- **Send messages** with simulated intelligent replies
- **Smooth GSAP slide transitions** between screens
- **Live clock** in the header
- **Status** section (view & create)
- **Call log** with incoming / outgoing / missed
- **Banking** section with balance card, quick actions, and transactions
- **Profile / Settings**
- **Fully responsive** — works in portrait and landscape
- **All buttons clickable** with feedback toasts
- Mobile-first design (best at ≤ 420px width)

## Tech Stack

- HTML5 + CSS3
- Tailwind CSS 4 (via CDN)
- DaisyUI
- Lucide Icons
- GSAP (animations)
- Vanilla JavaScript (no build step required)

## How to Run

1. Open `index.html` directly in any modern browser  
   **or**
2. Serve the folder with any static server:

```bash
# Python
python -m http.server 8080

# Node (if you have npx)
npx serve .
```

Then open `http://localhost:8080` (or the port shown).

### Recommended viewing

- Phone or browser DevTools mobile emulator (iPhone / Pixel)
- Width ≤ 420px for the best mobile experience
- Rotate to landscape — the app adapts with a persistent sidebar

## Project Structure

```
bschat/
├── index.html      # Main app shell + all screens
├── app.js          # Logic, data, interactions
└── README.md
```

No build step, no dependencies to install. Just open and go.
