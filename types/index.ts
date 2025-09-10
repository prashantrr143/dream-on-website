/// <reference types="react" />
import React from 'react';
import type { JSX } from 'react';
// Global type definitions for the application

export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}

// Navigation types
export interface NavItem {
  name: string
  href: string
  dropdown?: DropdownItem[]
}

export interface DropdownItem {
  name: string
  href: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

// Service types
export interface Service {
  icon: string
  title: string
  description: string
  metrics: string
  gradient: string
}

// Achievement types
export interface Achievement {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  subtitle: string
}

// Trust badge types
export interface TrustBadge {
  text: string
  icon: React.ComponentType<{ className?: string }>
}

// Theme types
export interface ThemeColors {
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
  gradientPrimary: string
  gradientSecondary: string
  gradientAccent: string
  heroGradient: string
  glassBackground: string
  glassBorder: string
  buttonGradient: string
}

export interface Theme {
  name: string
  description: string
  psychology: string
  bestFor: string
  colors: ThemeColors
}

// Image types
export interface ImageItem {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

// Animation types
export type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn'

// Loading state types
export interface LoadingState {
  isLoading: boolean
  error: Error | null
  data: any
}

// Async operation types
export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export interface AsyncSubmitState<T> extends AsyncState<T> {
  success: boolean
}

export interface AsyncDataState<T> extends AsyncState<T> {
  lastFetched: number | null
  isStale: boolean
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
    custom?: (value: string) => string | null
  }
}

export interface FormData {
  [key: string]: string | string[] | boolean
}

// Performance types
export interface PerformanceMetrics {
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
}

export interface BundleAnalysis {
  totalSize: number
  jsSize: number
  cssSize: number
  imageSize: number
  chunks: Array<{
    name: string
    size: number
    type: 'js' | 'css' | 'asset'
  }>
}

// Error types
export interface ErrorInfo {
  componentStack: string
  errorBoundary?: string
}

export interface ErrorReport {
  error: Error
  errorInfo?: ErrorInfo
  timestamp: number
  userAgent: string
  url: string
  userId?: string
}

// API types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface ApiError {
  message: string
  code: string
  status: number
  details?: Record<string, any>
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
  structuredData?: Record<string, any>
}

// Analytics types
export interface AnalyticsEvent {
  name: string
  category: string
  action: string
  label?: string
  value?: number
  customParameters?: Record<string, any>
}

// Utility types
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

// Component prop types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  isLoading?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  helperText?: string
}

export interface ModalProps extends BaseComponent {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

// Environment types
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test'
  NEXT_PUBLIC_SITE_URL: string
  NEXT_PUBLIC_ANALYTICS_ID?: string
  NEXT_PUBLIC_SENTRY_DSN?: string
}

// Feature flag types
export interface FeatureFlags {
  enableAnalytics: boolean
  enableErrorReporting: boolean
  enablePerformanceMonitoring: boolean
  enableA11yFeatures: boolean
  enableExperimentalFeatures: boolean
}

// User preference types
export interface UserPreferences {
  theme: string
  reducedMotion: boolean
  highContrast: boolean
  fontSize: 'small' | 'medium' | 'large'
  language: string
}

// Export commonly used React types
export type FC<P = {}> = React.FunctionComponent<P>
export type PropsWithChildren<P = {}> = P & { children?: React.ReactNode }
export type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = 
  React.ComponentProps<T>

// Branded types for better type safety
export type UserId = string & { readonly brand: unique symbol }
export type Email = string & { readonly brand: unique symbol }
export type Url = string & { readonly brand: unique symbol }
export type Timestamp = number & { readonly brand: unique symbol }