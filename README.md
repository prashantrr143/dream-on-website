# Yati Sphere Technologies - Enterprise Website

A modern, high-performance enterprise website built with Next.js 15, showcasing technology consulting services with premium design and exceptional user experience.

## 🚀 Live Demo

Visit the live website: [Yati Sphere Technologies](https://github.com/prashantrr143/yati-sphere-website)

## ✨ Features

### 🎨 Modern Design
- **Premium Visual Design** with glassmorphism and gradient effects
- **Dark/Light Theme Support** with automatic system detection
- **Responsive Design** optimized for all devices (mobile-first approach)
- **OKLCH Color Space** for better perceptual uniformity
- **Framer Motion Animations** with micro-interactions and scroll-triggered effects

### 🏗️ Technical Excellence
- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety throughout
- **TailwindCSS 4** with modern utility-first styling
- **shadcn/ui Components** for consistent design system
- **Performance Optimized** with dynamic imports and lazy loading

### 📱 User Experience
- **Smooth Animations** with hardware-accelerated CSS transforms
- **Interactive Navigation** with professional dropdown menus
- **Progressive Enhancement** - works without JavaScript
- **Accessibility Compliant** with proper ARIA labels and keyboard navigation
- **SEO Optimized** with proper meta tags and semantic HTML

## 📂 Project Structure

```
yati-sphere-website/
├── app/                    # Next.js 15 App Router
│   ├── about-us/          # Company information and team
│   ├── case-studies/      # Success stories and client testimonials
│   ├── contact-us/        # Advanced contact form with validation
│   ├── partners/          # Partnership information and benefits
│   ├── policy/            # Privacy policy and terms
│   ├── resources/         # Knowledge hub and resources
│   ├── services/          # Service catalog with pricing
│   └── solutions/         # Solution pages (Cloud, AI/ML, DevOps, etc.)
├── components/            # Reusable React components
│   ├── modern/           # Modern, lightweight components
│   ├── ui/               # shadcn/ui base components
│   └── shared-layout.tsx # Layout wrapper
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── styles/               # Global styles and CSS
```

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animation
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

### Development Tools
- **[pnpm](https://pnpm.io/)** - Fast, efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prashantrr143/yati-sphere-website.git
   cd yati-sphere-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
pnpm dev          # Start development server with Turbo
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📋 Pages & Features

### 🏠 Homepage
- Modern hero section with animated background
- Services overview with interactive cards
- Client testimonials and success metrics
- Call-to-action sections

### 🏢 About Us
- Company mission, vision, and values
- Leadership team profiles
- Company achievements and statistics
- Comprehensive company overview

### 💼 Solutions
- **Cloud Infrastructure** - Multi-cloud strategy and migration
- **AI & Machine Learning** - Custom AI models and automation
- **DevOps & Automation** - CI/CD pipelines and infrastructure
- **Enterprise Security** - Zero-trust architecture and compliance
- **Data Analytics** - Real-time insights and business intelligence
- **Digital Consulting** - Strategic transformation guidance

### 🛠️ Services
- Comprehensive service catalog with pricing
- Infrastructure & Platform Services
- AI & Data Services
- Security & Compliance Services
- Development & Design Services
- Consulting & Strategy Services

### 📚 Case Studies
- Detailed client success stories
- Industry-specific implementations
- Measurable business outcomes
- Technical challenges and solutions

### 📞 Contact Us
- Advanced contact form with validation
- Multi-select service options
- Real-time form validation
- Professional inquiry handling

### 🤝 Partners
- Partnership types and benefits
- Technology partner ecosystem
- Channel partner network
- Certification partnerships

### 📖 Resources
- Knowledge hub with whitepapers
- Industry reports and insights
- Upcoming webinars and events
- Technical documentation

## 🎨 Design System

### Color Palette (OKLCH)
```css
--primary: oklch(0.68 0.18 270);     /* Vibrant violet */
--accent: oklch(0.72 0.16 280);      /* Bright blue */
--background: oklch(0.04 0.02 240);  /* Deep dark */
--foreground: oklch(0.98 0.01 0);    /* Pure white */
```

### Typography
- **Primary Font**: Inter (Variable font with optimal loading)
- **Responsive Scale**: Fluid typography from mobile to desktop
- **Gradient Text**: Color gradients for emphasis and branding

### Animation Principles
- **Micro-interactions**: Hover states and subtle transitions
- **Scroll-triggered**: Progressive reveal using Intersection Observer
- **Performance**: Hardware-accelerated CSS transforms
- **Accessibility**: Respects `prefers-reduced-motion`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect repo and deploy
- **Railway**: One-click deployment
- **Self-hosted**: Use `pnpm build && pnpm start`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Customization
- **Colors**: Modify TailwindCSS configuration in `tailwind.config.ts`
- **Fonts**: Update font loading in `app/layout.tsx`
- **Content**: Edit page content in respective files under `app/`

## 📈 Performance

### Optimizations
- **Dynamic Imports**: Lazy loading for better performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching strategies

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 95+
- **SEO**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Prashant Singh**
- GitHub: [@prashantrr143](https://github.com/prashantrr143)
- Repository: [yati-sphere-website](https://github.com/prashantrr143/yati-sphere-website)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform
- **shadcn** for the excellent UI components
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

---

⭐ **Star this repository if it helped you!**
