# Sujay Mishra — Developer Portfolio Website

A production-quality, dark-themed personal developer portfolio built for **Sujay Mishra**, a Computer Science Engineering student at Chandigarh University.

Built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ✨ Features

- 🎯 **100% Fact-Based**: Strictly based on provided student details, education metrics (CGPA 8.04, Class 10: 82%, Class 12: 76%), and real hackathon victories. Zero fabricated metrics or experiences.
- 🏆 **Flagship Hackathon Highlight**: Dedicated visual emphasis on **BUILDX by TRAE AI — NSUT Delhi (🥇 1st Place - Team Apex Zero)** with an interactive case study modal.
- ⌨️ **Developer Command Palette (`Ctrl + K` / `Cmd + K`)**: Keyboard-accessible command menu to quickly navigate sections, download resume, or open social links.
- 💻 **Interactive Code Terminal**: Realistic macOS/Linux terminal preview in the hero section displaying JSON profile data and algorithm code snippets.
- ⚡ **Interactive Skills & DSA Explorer**: Tabbed skill categorization and algorithmic domain explorer without fake percentage bars.
- 📄 **Resume Download Integration**: Dedicated CTA handling resume downloads cleanly from `/public/Sujay-Mishra-Resume.pdf`.
- 📱 **Fully Responsive & Accessible**: Custom glassmorphism aesthetic optimized for desktop, tablet, and mobile (360px+).

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` package manager

### 1. Installation
Clone or navigate to the repository directory and install dependencies:
```bash
npm install
```

### 2. Running Locally (Development Mode)
Start the local Vite development server:
```bash
npm run dev
```
The application will open at `http://localhost:5173`.

---

## 🛠️ How to Customize Personal Information

All personal data, links, skills, and projects are centralized in a single configuration file:

📁 `src/data/portfolioData.js`

### 1. Update Social & Contact Links
Open `src/data/portfolioData.js` and edit the `socials` object:
```javascript
export const personalData = {
  // ...
  socials: {
    github: "https://github.com/your-actual-username",
    linkedin: "https://linkedin.com/in/your-actual-username",
    email: "sujay.mishra.dev@example.com"
  },
  resumePath: "/Sujay-Mishra-Resume.pdf"
};
```

### 2. Adding Your Resume PDF
1. Place your actual resume PDF inside the `public/` directory.
2. Name the file **`Sujay-Mishra-Resume.pdf`** (or update `resumePath` in `src/data/portfolioData.js` to match your filename).
3. The **Download Resume** buttons in the Navbar, Hero, Command Palette, and Resume section will automatically download this file.

### 3. Updating Project Links
In `src/data/portfolioData.js`, locate `projectsData` and update `githubUrl` or `liveUrl` for any project:
```javascript
{
  id: "roster-optimisation",
  title: "AI-Driven Roster & Contract Optimisation",
  githubUrl: "https://github.com/your-username/your-repo-name",
  liveUrl: "https://your-live-demo-link.com"
}
```

---

## 📦 Production Build & Deployment

### Build for Production
To bundle the application for production deployment:
```bash
npm run build
```
This generates optimized static files in the `dist/` folder.

### Deploying to Vercel
1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com).
3. Select **"Import Project"** and choose your repository.
4. Keep standard Vite settings (Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

### Deploying to Netlify
1. Drag and drop the `dist/` directory into Netlify, or connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📜 License
Personal Portfolio Code — Free to customize and deploy.
