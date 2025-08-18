# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Nexus Technologies" - a futuristic, high-performance Next.js 15 website for an enterprise technology consulting company. The project emphasizes modern web technologies, premium visual design, and exceptional user experience with lightweight animations and micro-interactions.

## Development Commands

- `pnpm dev` - Start development server with Turbo (preferred)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

The project uses pnpm as the package manager (evident from pnpm-lock.yaml).

## Modern Architecture

### Core Technologies
- **Next.js 15**: App Router with React 19 and TypeScript
- **TailwindCSS 4**: Modern utility-first CSS with OKLCH color space
- **Framer Motion**: Advanced animations and micro-interactions
- **Canvas API**: Lightweight particle systems and visual effects
- **Performance-First**: No heavy 3D libraries, optimized for all devices

### Component Organization
- `components/modern/` - Modern, lightweight components
  - `hero-modern.tsx` - Futuristic hero section with animated backgrounds
  - `services-modern.tsx` - Interactive service showcase
  - `service-card-modern.tsx` - 3D-style cards with micro-interactions
  - `gradient-background.tsx` - Animated gradient mesh system
  - `particle-system.tsx` - Canvas-based particle effects
- `components/ui/` - shadcn/ui base components
- `app/` - App Router pages

### Visual Design System

#### Color Palette (OKLCH)
- **Primary Dark Theme**: Deep slate/black backgrounds (oklch(0.02-0.08))
- **Accent Colors**: Violet/blue/cyan gradients for modern feel
- **Text**: High contrast white/light gray for readability
- **Glass Effects**: Translucent overlays with backdrop-blur

#### Animation Principles
- **Micro-interactions**: Hover states, button animations, card transforms
- **Scroll-triggered**: Progressive reveal animations using Intersection Observer
- **Performance**: CSS transforms and Canvas API (no WebGL dependency)
- **Accessibility**: Respects prefers-reduced-motion

#### Typography
- **Inter Font**: Variable font with proper loading optimization
- **Responsive Scale**: Fluid typography from mobile to desktop
- **Gradient Text**: Color gradients for emphasis and branding

### Performance Optimizations

#### Loading Strategy
- **Dynamic Imports**: All major components are lazy-loaded
- **Suspense Boundaries**: Skeleton states for smooth loading
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

#### Animation Performance
- **Canvas API**: Lightweight particle systems (not WebGL)
- **CSS Transforms**: Hardware-accelerated animations
- **RAF**: Proper animation frame management
- **Device Detection**: Adaptive quality based on device capabilities

#### Mobile-First
- **Responsive Design**: Container queries and modern CSS Grid
- **Touch Interactions**: Optimized for mobile gestures
- **Reduced Motion**: Automatic fallbacks for accessibility

### Key Modern Components

#### HeroModern
- Animated gradient mesh background using Canvas
- Interactive particle system with mouse following
- Scroll-triggered parallax effects
- Fully responsive with mobile optimizations

#### ServiceCardModern
- 3D hover effects using CSS transforms
- Glassmorphism design with backdrop-blur
- Mouse-tracked lighting effects
- Micro-animations and spring physics

#### GradientBackground
- Real-time animated gradient mesh
- Optimized Canvas rendering
- Fallback CSS gradients
- Smooth color transitions

#### ParticleSystem
- Interactive Canvas-based particles
- Network connections and floating dots
- Mouse interaction without performance cost
- Configurable density and effects

## Styling Architecture

### CSS Custom Properties
Modern OKLCH color space for better perceptual uniformity:
```css
--primary: oklch(0.68 0.18 270);     /* Vibrant violet */
--accent: oklch(0.72 0.16 280);      /* Bright blue */
--background: oklch(0.04 0.02 240);  /* Deep dark */
```

### Utility Classes
- `.glass-card` - Modern glassmorphism effects
- `.gradient-text` - Animated gradient text
- `.modern-button` - Premium button styling
- `.glow-effect` - Interactive glow effects

### Responsive Strategy
- Mobile-first design approach
- Container queries for component-based responsive design
- Fluid typography and spacing
- Touch-optimized interactions

## Development Guidelines

### Component Patterns
1. **Lightweight**: Prefer CSS and Canvas over heavy 3D libraries
2. **Accessible**: Include proper ARIA labels and keyboard navigation
3. **Performant**: Use dynamic imports and proper loading states
4. **Responsive**: Mobile-first with progressive enhancement

### Animation Best Practices
1. **Purposeful**: Every animation should enhance UX, not distract
2. **Smooth**: 60fps target with proper RAF usage
3. **Respectful**: Honor prefers-reduced-motion settings
4. **Optimized**: Hardware-accelerated CSS transforms

### File Structure
```
components/
├── modern/           # Modern, lightweight components
├── ui/              # Base shadcn/ui components  
└── shared-layout.tsx # Layout wrapper

app/
├── layout.tsx       # Root layout
├── page.tsx         # Home page
└── globals.css      # Modern styling system
```

## Brand Identity
- **Company**: Nexus Technologies
- **Aesthetic**: Futuristic, premium, enterprise-focused
- **Colors**: Dark theme with violet/blue accents
- **Personality**: Innovative, trustworthy, cutting-edge