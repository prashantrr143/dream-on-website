// Performance monitoring utilities
export const performanceMetrics = {
  // Web Vitals tracking
  trackWebVitals: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  },

  // Bundle size monitoring
  trackBundleSize: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const resources = performance.getEntriesByType('resource')
      
      console.log('Navigation timing:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load: navigation.loadEventEnd - navigation.loadEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
      })

      const scriptSizes = resources
        .filter((resource) => resource.name.includes('.js'))
        .reduce((total, resource) => total + (resource.transferSize || 0), 0)
      
      console.log('Total JS bundle size:', Math.round(scriptSizes / 1024), 'KB')
    }
  },

  // Memory usage monitoring
  trackMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'performance' in window && (performance as any).memory) {
      const memory = (performance as any).memory
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576),
        total: Math.round(memory.totalJSHeapSize / 1048576),
        limit: Math.round(memory.jsHeapSizeLimit / 1048576),
      }, 'MB')
    }
  },

  // Animation performance
  measureAnimationFrame: (callback: () => void, label = 'Animation') => {
    const start = performance.now()
    requestAnimationFrame(() => {
      callback()
      const end = performance.now()
      console.log(`${label} frame time:`, Math.round(end - start), 'ms')
    })
  },

  // Component render time
  measureRenderTime: (componentName: string, renderFn: () => void) => {
    const start = performance.now()
    renderFn()
    const end = performance.now()
    console.log(`${componentName} render time:`, Math.round(end - start), 'ms')
  }
}

// Performance optimization utilities
export const optimizationUtils = {
  // Debounce function for event handlers
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void => {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },

  // Throttle function for scroll/resize handlers
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void => {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  // Lazy loading with Intersection Observer
  createLazyLoader: (callback: () => void, threshold = 0.1) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.disconnect()
          }
        })
      },
      { threshold }
    )
    return observer
  },

  // Image preloader
  preloadImages: (imageUrls: string[]) => {
    return Promise.all(
      imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = url
        })
      })
    )
  }
}

// Development-only performance warnings
export const performanceWarnings = {
  warnLargeBundle: (threshold = 250) => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource')
        const largeResources = resources.filter(
          (resource) => (resource.transferSize || 0) > threshold * 1024
        )
        
        if (largeResources.length > 0) {
          console.warn('Large resources detected:', largeResources.map(r => ({
            name: r.name,
            size: Math.round((r.transferSize || 0) / 1024) + 'KB'
          })))
        }
      }, 2000)
    }
  },

  warnSlowRender: (threshold = 16) => {
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > threshold) {
            console.warn(`Slow render detected: ${entry.name} took ${Math.round(entry.duration)}ms`)
          }
        }
      })
      observer.observe({ entryTypes: ['measure'] })
    }
  }
}