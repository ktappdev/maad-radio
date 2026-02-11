# CLAUDE.md

## MANDATORY: Use td for Task Management

You must run td usage --new-session at conversation start (or after /clear) to see current work.
Use td usage -q for subsequent reads.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Maad 97.5 FM, a Guyanese radio station. It's a Next.js 13 application built with TypeScript, Tailwind CSS, and React. The site features live audio streaming, program schedules, host information, and contact functionality.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Core Technologies
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React** with functional components and hooks

### Key Components Structure

**Audio System:**
- `BottomPlayer` (`src/app/components/BottomPlayer.tsx`) - Main persistent audio player at bottom of screen
- `Player` (`src/app/components/Player.tsx`) - Legacy player component (currently disabled in layout)
- Both players use the same audio stream: `https://streaming.broadcastradio.com/brutal`

**Program Management:**
- `src/app/lib/programs.ts` - Centralized program data with schedules, host info, and descriptions
- `src/app/lib/interfaces.ts` - TypeScript interfaces for program data
- `src/app/lib/convertDaysToNumber.ts` - Utility for converting day names to numbers

**Layout Components:**
- `src/app/layout.tsx` - Root layout with SEO metadata, structured data, and component structure
- `src/app/components/Header.tsx` - Site navigation and branding
- `src/app/components/Banner.tsx` - Dynamic text display component
- `src/app/components/Schedule.tsx` - Program schedule display

**Feature Components:**
- `src/app/components/ContactUs.jsx` - Contact form using EmailJS
- `src/app/components/GetLiveVideo.tsx` - Facebook Live video integration
- `src/app/components/Youtube.tsx` - YouTube video player
- `src/app/components/Socials.tsx` - Social media links
- `src/app/components/RadioPersonality.tsx` - Individual host bios (used in dynamic routes)

### Dynamic Routes
- `src/app/bio/[id]/page.tsx` - Dynamic personality bio pages based on program IDs

### Styling System
- Uses Tailwind CSS with custom animations defined in `src/app/globals.css`
- Brand colors: `#FD7B2B` (primary orange), `#FF8C42` (secondary orange)
- Glass morphism effects with `glass-dark` and backdrop blur utilities
- Custom animations: `animate-radio-wave`, `animate-float`, `animate-pulse-glow`

### Data Flow
1. Program data is centralized in `programs.ts` with comprehensive show information
2. `BottomPlayer` determines current show based on day/time and updates every 10 seconds
3. Volume preferences are stored in localStorage
4. Contact form uses EmailJS for email sending

### Key Features
- **Live Audio Streaming** - Persistent bottom player with show detection
- **Dynamic Show Detection** - Automatically displays current program based on schedule
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **SEO Optimized** - Structured data, Open Graph tags, and Twitter cards
- **Contact System** - Email-based contact form with validation
- **Social Integration** - Facebook Live video and YouTube embeds

## Environment Configuration
- `NEXT_PUBLIC_DOMAIN` - Used for dynamic URL generation in metadata and social sharing

## Audio Player Notes
- Two player implementations exist but only `BottomPlayer` is active
- Volume preferences persist in localStorage
- Error handling for audio stream failures
- Custom events allow triggering playback from other components (e.g., hero "Listen Live" button)