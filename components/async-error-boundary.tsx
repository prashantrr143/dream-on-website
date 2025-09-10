"use client"

import { useEffect } from 'react'
import ErrorBoundary from './error-boundary'

interface AsyncErrorBoundaryProps {
  children: React.ReactNode
  onError?: (error: Error) => void
}

// Hook to catch async errors and convert them to sync errors for ErrorBoundary
export function useAsyncError() {
  const throwError = (error: Error) => {
    // This will be caught by the nearest ErrorBoundary
    throw error
  }

  return throwError
}

// Wrapper component for async operations
export function AsyncErrorBoundary({ children, onError }: AsyncErrorBoundaryProps) {
  useEffect(() => {
    // Global error handler for unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      
      if (onError) {
        onError(new Error(event.reason))
      }
      
      // Prevent the default browser behavior
      event.preventDefault()
    }

    // Global error handler for runtime errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error)
      
      if (onError) {
        onError(event.error)
      }
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [onError])

  return (
    <ErrorBoundary onError={(error) => {
      if (onError) {
        onError(error)
      }
    }}>
      {children}
    </ErrorBoundary>
  )
}