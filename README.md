# Cyril | Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It showcases an intro hero, about section, skills, projects, education, contact form, custom cursor, loading screen, and scroll-based reveal animations.

## Features

- Responsive single-page layout
- Sticky navigation with active section tracking
- Animated hero and section reveal effects
- Custom cursor and loading screen
- Projects section with thumbnail cards and external links
- Contact section with social links and form styling
- Built with Vite for fast development and production builds

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Deployment Notes

The Vite config uses a relative base path so the site can be deployed from a root domain or a subpath host such as GitHub Pages.

If you add new public assets, prefer relative references so they continue to work after deployment.

## Project Structure

```text
src/
	App.tsx
	main.tsx
	index.css
	components/
		About.tsx
		Contact.tsx
		CustomCursor.tsx
		Education.tsx
		Footer.tsx
		Hero.tsx
		LoadingScreen.tsx
		NavBar.tsx
		Projects.tsx
		Reveal.tsx
		Skills.tsx
public/
	thumbnails/
```

## Build Output

Run `npm run build` to generate the production bundle in `dist/`.
