/**
 * Professional Theme System
 * Based on psychological color theory and UX best practices
 */

export interface Theme {
  name: string
  description: string
  psychology: string
  bestFor: string
  colors: {
    // Base colors
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
    
    // Gradient colors
    gradientPrimary: string
    gradientSecondary: string
    gradientAccent: string
    
    // Hero gradient
    heroGradient: string
    
    // Glass card colors
    glassBackground: string
    glassBorder: string
    
    // Button colors
    buttonGradient: string
  }
}

export const themes: Record<string, Theme> = {
  // Current Dark Professional Theme
  darkProfessional: {
    name: "Dark Professional",
    description: "Sophisticated dark theme with blue accents",
    psychology: "Trust, professionalism, focus, premium feel",
    bestFor: "Enterprise, SaaS, Tech companies, Professional services",
    colors: {
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      card: "224 71.4% 4.1%",
      cardForeground: "210 40% 98%",
      popover: "224 71.4% 4.1%",
      popoverForeground: "210 40% 98%",
      primary: "220.9 39.3% 11%",
      primaryForeground: "210 40% 98%",
      secondary: "215 27.9% 16.9%",
      secondaryForeground: "210 40% 98%",
      muted: "215 27.9% 16.9%",
      mutedForeground: "217.9 10.6% 64.9%",
      accent: "216 12.2% 83.9%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "210 40% 98%",
      border: "215 27.9% 16.9%",
      input: "215 27.9% 16.9%",
      ring: "216 12.2% 83.9%",
      gradientPrimary: "#3b82f6",
      gradientSecondary: "#8b5cf6",
      gradientAccent: "#06b6d4",
      heroGradient: "linear-gradient(135deg, hsl(222.2 84% 4.9%) 0%, hsl(224 71.4% 4.1%) 25%, hsl(215 27.9% 16.9%) 50%, hsl(224 71.4% 4.1%) 75%, hsl(222.2 84% 4.9%) 100%)",
      glassBackground: "rgba(255, 255, 255, 0.02)",
      glassBorder: "rgba(255, 255, 255, 0.08)",
      buttonGradient: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)"
    }
  },

  // Cyberpunk Neon Theme
  cyberpunkNeon: {
    name: "Cyberpunk Neon",
    description: "High-tech neon aesthetic with electric colors",
    psychology: "Innovation, cutting-edge, excitement, future-forward",
    bestFor: "AI/ML companies, Gaming, Crypto, Tech startups, Innovation labs",
    colors: {
      background: "260 15% 8%",
      foreground: "300 100% 95%",
      card: "260 20% 12%",
      cardForeground: "300 100% 95%",
      popover: "260 20% 12%",
      popoverForeground: "300 100% 95%",
      primary: "280 100% 15%",
      primaryForeground: "300 100% 95%",
      secondary: "260 25% 18%",
      secondaryForeground: "300 100% 95%",
      muted: "260 25% 18%",
      mutedForeground: "300 20% 70%",
      accent: "300 100% 60%",
      accentForeground: "260 15% 8%",
      destructive: "0 85% 60%",
      destructiveForeground: "300 100% 95%",
      border: "260 25% 18%",
      input: "260 25% 18%",
      ring: "300 100% 60%",
      gradientPrimary: "#ff0080",
      gradientSecondary: "#00ffff",
      gradientAccent: "#ff6600",
      heroGradient: "linear-gradient(135deg, hsl(260 15% 8%) 0%, hsl(260 20% 12%) 25%, hsl(300 50% 15%) 50%, hsl(260 20% 12%) 75%, hsl(260 15% 8%) 100%)",
      glassBackground: "rgba(255, 0, 128, 0.05)",
      glassBorder: "rgba(0, 255, 255, 0.15)",
      buttonGradient: "linear-gradient(135deg, #ff0080, #00ffff, #ff6600)"
    }
  },

  // Forest Zen Theme
  forestZen: {
    name: "Forest Zen",
    description: "Calming earth tones with natural greens",
    psychology: "Trust, growth, stability, sustainability, wellness",
    bestFor: "Healthcare, Wellness, Sustainability, Finance, Consulting",
    colors: {
      background: "120 25% 8%",
      foreground: "60 15% 95%",
      card: "120 30% 12%",
      cardForeground: "60 15% 95%",
      popover: "120 30% 12%",
      popoverForeground: "60 15% 95%",
      primary: "140 50% 15%",
      primaryForeground: "60 15% 95%",
      secondary: "120 35% 18%",
      secondaryForeground: "60 15% 95%",
      muted: "120 35% 18%",
      mutedForeground: "120 15% 70%",
      accent: "150 80% 45%",
      accentForeground: "120 25% 8%",
      destructive: "0 70% 55%",
      destructiveForeground: "60 15% 95%",
      border: "120 35% 18%",
      input: "120 35% 18%",
      ring: "150 80% 45%",
      gradientPrimary: "#22c55e",
      gradientSecondary: "#059669",
      gradientAccent: "#10b981",
      heroGradient: "linear-gradient(135deg, hsl(120 25% 8%) 0%, hsl(120 30% 12%) 25%, hsl(140 40% 15%) 50%, hsl(120 30% 12%) 75%, hsl(120 25% 8%) 100%)",
      glassBackground: "rgba(34, 197, 94, 0.03)",
      glassBorder: "rgba(16, 185, 129, 0.12)",
      buttonGradient: "linear-gradient(135deg, #22c55e, #059669, #10b981)"
    }
  },

  // Sunset Luxury Theme
  sunsetLuxury: {
    name: "Sunset Luxury",
    description: "Warm luxury palette with gold and amber",
    psychology: "Luxury, warmth, success, premium, exclusivity",
    bestFor: "Luxury brands, Real estate, Investment firms, High-end services",
    colors: {
      background: "25 35% 8%",
      foreground: "45 25% 95%",
      card: "25 40% 12%",
      cardForeground: "45 25% 95%",
      popover: "25 40% 12%",
      popoverForeground: "45 25% 95%",
      primary: "35 60% 15%",
      primaryForeground: "45 25% 95%",
      secondary: "25 45% 18%",
      secondaryForeground: "45 25% 95%",
      muted: "25 45% 18%",
      mutedForeground: "35 20% 70%",
      accent: "45 95% 55%",
      accentForeground: "25 35% 8%",
      destructive: "0 75% 60%",
      destructiveForeground: "45 25% 95%",
      border: "25 45% 18%",
      input: "25 45% 18%",
      ring: "45 95% 55%",
      gradientPrimary: "#f59e0b",
      gradientSecondary: "#ef4444",
      gradientAccent: "#ec4899",
      heroGradient: "linear-gradient(135deg, hsl(25 35% 8%) 0%, hsl(25 40% 12%) 25%, hsl(35 50% 15%) 50%, hsl(25 40% 12%) 75%, hsl(25 35% 8%) 100%)",
      glassBackground: "rgba(245, 158, 11, 0.04)",
      glassBorder: "rgba(251, 191, 36, 0.15)",
      buttonGradient: "linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)"
    }
  },

  // Arctic Minimal Theme
  arcticMinimal: {
    name: "Arctic Minimal",
    description: "Clean minimalist design with cool blues",
    psychology: "Clarity, precision, efficiency, modern, clean",
    bestFor: "Design agencies, Architecture, Minimalist brands, Software tools",
    colors: {
      background: "210 25% 12%",
      foreground: "210 15% 92%",
      card: "210 30% 16%",
      cardForeground: "210 15% 92%",
      popover: "210 30% 16%",
      popoverForeground: "210 15% 92%",
      primary: "210 50% 20%",
      primaryForeground: "210 15% 92%",
      secondary: "210 35% 22%",
      secondaryForeground: "210 15% 92%",
      muted: "210 35% 22%",
      mutedForeground: "210 20% 65%",
      accent: "200 90% 60%",
      accentForeground: "210 25% 12%",
      destructive: "0 70% 60%",
      destructiveForeground: "210 15% 92%",
      border: "210 35% 22%",
      input: "210 35% 22%",
      ring: "200 90% 60%",
      gradientPrimary: "#0ea5e9",
      gradientSecondary: "#3b82f6",
      gradientAccent: "#06b6d4",
      heroGradient: "linear-gradient(135deg, hsl(210 25% 12%) 0%, hsl(210 30% 16%) 25%, hsl(210 40% 20%) 50%, hsl(210 30% 16%) 75%, hsl(210 25% 12%) 100%)",
      glassBackground: "rgba(14, 165, 233, 0.03)",
      glassBorder: "rgba(6, 182, 212, 0.12)",
      buttonGradient: "linear-gradient(135deg, #0ea5e9, #3b82f6, #06b6d4)"
    }
  },

  // Royal Purple Theme
  royalPurple: {
    name: "Royal Purple",
    description: "Regal purple palette with gold accents",
    psychology: "Luxury, creativity, wisdom, sophistication, innovation",
    bestFor: "Creative agencies, Premium brands, Education, Fashion, Art",
    colors: {
      background: "270 30% 8%",
      foreground: "270 15% 95%",
      card: "270 35% 12%",
      cardForeground: "270 15% 95%",
      popover: "270 35% 12%",
      popoverForeground: "270 15% 95%",
      primary: "270 60% 15%",
      primaryForeground: "270 15% 95%",
      secondary: "270 40% 18%",
      secondaryForeground: "270 15% 95%",
      muted: "270 40% 18%",
      mutedForeground: "270 20% 70%",
      accent: "280 85% 65%",
      accentForeground: "270 30% 8%",
      destructive: "0 75% 60%",
      destructiveForeground: "270 15% 95%",
      border: "270 40% 18%",
      input: "270 40% 18%",
      ring: "280 85% 65%",
      gradientPrimary: "#8b5cf6",
      gradientSecondary: "#a855f7",
      gradientAccent: "#d946ef",
      heroGradient: "linear-gradient(135deg, hsl(270 30% 8%) 0%, hsl(270 35% 12%) 25%, hsl(280 50% 15%) 50%, hsl(270 35% 12%) 75%, hsl(270 30% 8%) 100%)",
      glassBackground: "rgba(139, 92, 246, 0.04)",
      glassBorder: "rgba(168, 85, 247, 0.15)",
      buttonGradient: "linear-gradient(135deg, #8b5cf6, #a855f7, #d946ef)"
    }
  },

  // Premium Light Theme
  premiumLight: {
    name: "Premium Light",
    description: "Sophisticated light theme with high contrast",
    psychology: "Clean, professional, trustworthy, modern, accessible",
    bestFor: "Corporate, Healthcare, Education, Professional services, SaaS",
    colors: {
      background: "0 0% 98%",
      foreground: "220 25% 15%",
      card: "0 0% 100%",
      cardForeground: "220 25% 15%",
      popover: "0 0% 100%",
      popoverForeground: "220 25% 15%",
      primary: "220 25% 20%",
      primaryForeground: "0 0% 98%",
      secondary: "220 15% 92%",
      secondaryForeground: "220 25% 15%",
      muted: "220 15% 95%",
      mutedForeground: "220 15% 45%",
      accent: "210 100% 50%",
      accentForeground: "0 0% 98%",
      destructive: "0 65% 50%",
      destructiveForeground: "0 0% 98%",
      border: "220 15% 88%",
      input: "220 15% 92%",
      ring: "210 100% 50%",
      gradientPrimary: "#0066cc",
      gradientSecondary: "#0052a3",
      gradientAccent: "#003d7a",
      heroGradient: "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(220 15% 96%) 25%, hsl(220 20% 94%) 50%, hsl(220 15% 96%) 75%, hsl(0 0% 98%) 100%)",
      glassBackground: "rgba(255, 255, 255, 0.7)",
      glassBorder: "rgba(0, 102, 204, 0.15)",
      buttonGradient: "linear-gradient(135deg, #0066cc, #0052a3, #003d7a)"
    }
  },

  // Elegant Cream Theme
  elegantCream: {
    name: "Elegant Cream",
    description: "Warm cream background with rich contrast text",
    psychology: "Warmth, elegance, sophistication, comfort, premium",
    bestFor: "Luxury brands, Fashion, Interior design, Premium content, Art galleries",
    colors: {
      background: "45 25% 96%",
      foreground: "25 35% 20%",
      card: "45 50% 98%",
      cardForeground: "25 35% 20%",
      popover: "45 50% 98%",
      popoverForeground: "25 35% 20%",
      primary: "25 50% 25%",
      primaryForeground: "45 25% 96%",
      secondary: "45 20% 90%",
      secondaryForeground: "25 35% 20%",
      muted: "45 25% 92%",
      mutedForeground: "25 25% 40%",
      accent: "210 85% 45%",
      accentForeground: "45 25% 96%",
      destructive: "0 70% 45%",
      destructiveForeground: "45 25% 96%",
      border: "45 20% 85%",
      input: "45 20% 90%",
      ring: "210 85% 45%",
      gradientPrimary: "#2563eb",
      gradientSecondary: "#1d4ed8",
      gradientAccent: "#1e40af",
      heroGradient: "linear-gradient(135deg, hsl(45 25% 96%) 0%, hsl(45 30% 94%) 25%, hsl(45 35% 92%) 50%, hsl(45 30% 94%) 75%, hsl(45 25% 96%) 100%)",
      glassBackground: "rgba(255, 255, 255, 0.6)",
      glassBorder: "rgba(37, 99, 235, 0.15)",
      buttonGradient: "linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af)"
    }
  },

  // Pure Monochrome Theme
  pureMonochrome: {
    name: "Pure Monochrome",
    description: "High contrast black and white with blue accents",
    psychology: "Bold, powerful, clarity, modern, no-nonsense",
    bestFor: "News, Legal, Finance, Technical documentation, Minimalist brands",
    colors: {
      background: "0 0% 100%",
      foreground: "0 0% 5%",
      card: "0 0% 100%",
      cardForeground: "0 0% 5%",
      popover: "0 0% 100%",
      popoverForeground: "0 0% 5%",
      primary: "0 0% 10%",
      primaryForeground: "0 0% 100%",
      secondary: "0 0% 96%",
      secondaryForeground: "0 0% 5%",
      muted: "0 0% 98%",
      mutedForeground: "0 0% 35%",
      accent: "220 100% 50%",
      accentForeground: "0 0% 100%",
      destructive: "0 85% 45%",
      destructiveForeground: "0 0% 100%",
      border: "0 0% 90%",
      input: "0 0% 96%",
      ring: "220 100% 50%",
      gradientPrimary: "#0066ff",
      gradientSecondary: "#0052cc",
      gradientAccent: "#003d99",
      heroGradient: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 25%, hsl(0 0% 96%) 50%, hsl(0 0% 98%) 75%, hsl(0 0% 100%) 100%)",
      glassBackground: "rgba(255, 255, 255, 0.8)",
      glassBorder: "rgba(0, 102, 255, 0.2)",
      buttonGradient: "linear-gradient(135deg, #0066ff, #0052cc, #003d99)"
    }
  }
}

export const getThemeCSS = (theme: Theme) => {
  return `
    :root {
      --background: ${theme.colors.background};
      --foreground: ${theme.colors.foreground};
      --card: ${theme.colors.card};
      --card-foreground: ${theme.colors.cardForeground};
      --popover: ${theme.colors.popover};
      --popover-foreground: ${theme.colors.popoverForeground};
      --primary: ${theme.colors.primary};
      --primary-foreground: ${theme.colors.primaryForeground};
      --secondary: ${theme.colors.secondary};
      --secondary-foreground: ${theme.colors.secondaryForeground};
      --muted: ${theme.colors.muted};
      --muted-foreground: ${theme.colors.mutedForeground};
      --accent: ${theme.colors.accent};
      --accent-foreground: ${theme.colors.accentForeground};
      --destructive: ${theme.colors.destructive};
      --destructive-foreground: ${theme.colors.destructiveForeground};
      --border: ${theme.colors.border};
      --input: ${theme.colors.input};
      --ring: ${theme.colors.ring};
      --radius: 0.75rem;
    }

    .hero-gradient {
      background: ${theme.colors.heroGradient};
    }

    .gradient-text {
      background: linear-gradient(135deg, 
        ${theme.colors.gradientPrimary} 0%, 
        ${theme.colors.gradientSecondary} 50%, 
        ${theme.colors.gradientAccent} 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 300% 300%;
      animation: gradient-shift 8s ease-in-out infinite;
    }

    .glass-card {
      background: ${theme.colors.glassBackground};
      border: 1px solid ${theme.colors.glassBorder};
    }

    .enterprise-button {
      background: ${theme.colors.buttonGradient};
      background-size: 200% 200%;
      animation: gradient-shift 3s ease-in-out infinite;
    }
  `
}