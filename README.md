# Benji Pays: Invoice Rover 🐕

**A branded mobile endless runner game for Benji Pays.**

Browser-based, no app download. Scan a QR code and play instantly on any phone.

---

## What Is This?

Invoice Rover is a three-lane endless runner starring Benji, the Benji Pays mascot dog.
Players dodge bad payments and collect good ones across 10 global cities.
Built for trade show activations, lead generation, and social media campaigns.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Game Engine | Phaser 3 |
| Local Dev | Phaser Launcher |
| Code Editor | VS Code |
| Version Control | GitHub Desktop |
| Hosting | Netlify (auto-deploy on push) |
| Backend | Supabase (scores, leaderboard, lead capture) |

---

## Folder Structure

```
benjipays-invoice-rover/
  /game               → Phaser game files
    /src              → Game scenes and logic
    /assets
      /sprites        → Benji sprite sheets + outfits
      /backgrounds    → 10 city parallax strips (3 layers each)
      /audio
        /music        → Suno music tracks (MP3 loops)
        /sfx          → Sound effects (WAV)
      /ui             → HUD, screens, badges, logo
      /powerups       → Power-up icons + active states
  /leaderboard        → Standalone leaderboard HTML page
  /admin              → Password-protected admin panel
  /docs               → Project docs, handoff notes
```

---

## The 10 Cities

| # | City | Score Range |
|---|------|-------------|
| 1 | Vancouver 🇨🇦 | 0 – 1,500 |
| 2 | Toronto 🇨🇦 | 1,500 – 3,000 |
| 3 | Montreal 🇨🇦 | 3,000 – 4,500 |
| 4 | Dallas 🤠 | 4,500 – 6,000 |
| 5 | New York 🗽 | 6,000 – 7,500 |
| 6 | Los Angeles 🌴 | 7,500 – 9,000 |
| 7 | Miami 🌊 | 9,000 – 10,500 |
| 8 | London 🇬🇧 | 10,500 – 12,000 |
| 9 | Australia 🇦🇺 | 12,000 – 13,500 |
| 10 | Cyber City 🤖 | 13,500+ |

---

## The 4 Power-Ups

| Icon | Name | Duration | Effect |
|------|------|----------|--------|
| 🛡️ | Auto-Pay Shield | 15s | Full invincibility |
| ⚡ | Instant Pay Boost | 12s | Speed +60%, score 2× |
| 💰 | Paid in Full | Instant | Clears all obstacles |
| 💫 | Payment Streak | 15s+ | Double points, extends per collect |

---

## Setup

1. Open Phaser Launcher → point to `/game` folder
2. Netlify auto-deploys on every push to `main`
3. Supabase handles scores, leaderboard, and lead capture

---

*Benji Pays: Invoice Rover — Confidential Internal Project*
