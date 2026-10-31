# Portfolio Webpage

A personal portfolio website for **Pranshu Tiwari**, a BCA student and backend-focused developer. Built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Single-page portfolio with sections: Intro, Skills, Projects, Social, About
- Backend-focused skill showcase (NestJS, TypeScript, REST APIs, databases, messaging, DevOps, tools, frontend) with links to official docs
- Project highlights with tech stacks and repository links
- Responsive layout: mobile menu below 1300px, sidebar navigation on larger screens
- Scrollable content areas and a 6-line scrollable intro paragraph
- Dark theme with gray/purple accents
- Contact/social links including GitHub and GitLab

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm)

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Project Structure

```
portfolio-webpage/
├── index.html
├── public/                # Static assets (images, icons)
├── src/
│   ├── App.tsx            # Root component & page routing
│   ├── main.tsx           # Entry point
│   ├── index.css          # Tailwind entry + theme
│   ├── components/
│   │   └── Navbar.tsx     # Sidebar + mobile menu
│   ├── constants/
│   │   └── navigation.ts  # Navigation items
│   ├── pages/             # Page sections
│   │   ├── Intro.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Social.tsx
│   │   └── About.tsx
│   ├── styles/            # Tailwind class constants
│   └── types/
│       └── navigation.ts  # Shared types
└── README.md
```

## Author

Pranshu Tiwari — Pranshu.tiwari@outlook.com

## License

This project is private.
