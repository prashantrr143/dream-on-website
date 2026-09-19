import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        // Three families. `sans` is the body default (also on <body>),
        // `heading` for h1-h3, `mono` for eyebrows, labels and tags.
        sans: [
          'var(--font-sans)',
          'IBM Plex Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        heading: [
          'var(--font-heading)',
          'Space Grotesk',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        /* Design tokens. Plain hex vars, so these are used directly
           (bg-navy-900, text-ink-muted) rather than through hsl(). */
        "navy-900": "var(--navy-900)",
        "navy-800": "var(--navy-800)",
        "line-dark": "var(--line-dark)",
        "line-dark-2": "var(--line-dark-2)",
        "on-dark": "var(--on-dark)",
        "on-dark-muted": "var(--on-dark-muted)",
        "on-dark-label": "var(--on-dark-label)",
        paper: "var(--paper)",
        surface: "var(--surface)",
        line: "var(--line)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "blue-600": "var(--blue-600)",
        "blue-400": "var(--blue-400)",
        "amber-500": "var(--amber-500)",
        "amber-700": "var(--amber-700)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "var(--radius-card)",
        control: "var(--radius-control)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        hover: "var(--shadow-hover)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;