This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🤖 AI Meeting Summary & Action Item Generator

An AI-powered web application that integrates with **Zoom** and **Google Meet** to automatically:

- Transcribe meetings
- Generate meeting summaries
- Extract actionable items

Built with modern technologies like **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **OpenAI Whisper/GPT models**. Ideal for teams and individuals looking to streamline post-meeting documentation and accountability.

---

## 📸 Demo

> Coming soon! Screenshots & video demo will be added after the MVP release.

---

## ✨ Features

- ✅ Google OAuth Login
- ✅ Zoom & Google Meet Integration
- ✅ Auto Transcription (via Whisper or AssemblyAI)
- ✅ AI-powered Summary & Action Item Generation (GPT-4/GPT-4o)
- ✅ Responsive Dashboard for past meetings
- ✅ Search and filter meetings
- ✅ Tailwind-based clean UI
- ✅ Git hooks for linting & formatting

---

## 🏗️ Tech Stack & Versions

| Layer      | Technology                        | Version                  |
| ---------- | --------------------------------- | ------------------------ |
| Framework  | Next.js                           | `15.4.2`                 |
| Language   | TypeScript                        | `^5`                     |
| UI         | React                             | `19.1.0`                 |
| CSS        | Tailwind CSS                      | `^4`                     |
| State Mgmt | Redux Toolkit                     | `^2.8.2`                 |
| UI Lib     | ShadCN / Lucide Icons             | `^0.525.0`               |
| Animations | tw-animate-css                    | `^1.3.5`                 |
| Styling    | class-variance-authority          | `^0.7.1`                 |
| Helpers    | clsx, tailwind-merge              | `^2.1.1`, `^3.3.1`       |
| Linting    | ESLint, Prettier, Husky           | `^9`, `^3.6.2`, `^8.0.0` |
| Auth       | Google OAuth (Auth.js / NextAuth) | -                        |
| AI APIs    | OpenAI (Whisper + GPT-4)          | -                        |
| Deployment | Vercel                            | -                        |

---

## 🔌 Integrations

### 🔗 Zoom API

- Webhooks on meeting end
- Pull meeting recordings
- Authenticate via OAuth

### 🔗 Google Meet

- Google Calendar API (for event metadata)
- Google Drive API (for recordings, optional)
- OAuth2 for calendar and drive access
