# #ItWasNeverADress - Website Redesign

A modern NextJS 14 website for the #ItWasNeverADress movement, empowering women through storytelling and community building.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home** (`/`) - Main landing page with hero, features, testimonials, and stats
- **Share Your Stories** (`/share-your-stories`) - Submit and read empowering stories
- **About** (`/about`) - Learn about the #ItWasNeverADress movement
- **Free Stuff** (`/disrupt`) - Download free resources and materials
- **Press** (`/media`) - Media coverage and press information
- **Contact Us** (`/contact-us`) - Get in touch with the team
- **Store** (external link) - Shop #ItWasNeverADress merchandise

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Project Structure

```
├── app/
│   ├── about/page.tsx
│   ├── contact-us/page.tsx
│   ├── disrupt/page.tsx
│   ├── media/page.tsx
│   ├── share-your-stories/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Features

- Fully responsive design
- Modern, accessible UI components
- Multi-page routing with Next.js App Router
- Optimized for performance
- SEO-friendly metadata

## Building for Production

```bash
npm run build
npm start
```

## License

Content and design © 2022 #ItWasNeverADress
