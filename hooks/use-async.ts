import { useState, useCallback, useEffect } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

interface UseAsyncOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncOptions = {}
) {
  const { immediate = false, onSuccess, onError } = options
  
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null
  })

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const data = await asyncFunction()
      setState({ data, loading: false, error: null })
      onSuccess?.(data)
      return data
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setState({ data: null, loading: false, error: err })
      onError?.(err)
      throw err
    }
  }, [asyncFunction, onSuccess, onError])

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null })
  }, [])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [immediate, execute])

  return {
    ...state,
    execute,
    reset
  }
}

// Hook for handling form submissions
export function useAsyncSubmit<T>(
  submitFunction: (data: any) => Promise<T>,
  options: UseAsyncOptions = {}
) {
  const [state, setState] = useState<AsyncState<T> & { success: boolean }>({
    data: null,
    loading: false,
    error: null,
    success: false
  })

  const submit = useCallback(async (formData: any) => {
    setState(prev => ({ ...prev, loading: true, error: null, success: false }))
    
    try {
      const data = await submitFunction(formData)
      setState({ data, loading: false, error: null, success: true })
      options.onSuccess?.(data)
      return data
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setState({ data: null, loading: false, error: err, success: false })
      options.onError?.(err)
      throw err
    }
  }, [submitFunction, options])

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null, success: false })
  }, [])

  return {
    ...state,
    submit,
    reset
  }
}

// Hook for data fetching with caching
export function useAsyncData<T>(
  fetchFunction: () => Promise<T>,
  options: UseAsyncOptions & { 
    cacheTime?: number
    staleTime?: number 
  } = {}
) {
  const { cacheTime = 5 * 60 * 1000, staleTime = 0 } = options // 5 minutes cache, 0 stale time
  
  const [state, setState] = useState<AsyncState<T> & { 
    lastFetched: number | null
    isStale: boolean 
  }>({
    data: null,
    loading: false,
    error: null,
    lastFetched: null,
    isStale: false
  })

  const isDataStale = useCallback(() => {
    if (!state.lastFetched) return true
    return Date.now() - state.lastFetched > staleTime
  }, [state.lastFetched, staleTime])

  const isDataExpired = useCallback(() => {
    if (!state.lastFetched) return true
    return Date.now() - state.lastFetched > cacheTime
  }, [state.lastFetched, cacheTime])

  const fetchData = useCallback(async (force = false) => {
    // Don't fetch if we have fresh data and not forcing
    if (!force && state.data && !isDataExpired()) {
      return state.data
    }

    setState(prev => ({ 
      ...prev, 
      loading: true, 
      error: null,
      isStale: false 
    }))
    
    try {
      const data = await fetchFunction()
      const now = Date.now()
      setState({ 
        data, 
        loading: false, 
        error: null, 
        lastFetched: now,
        isStale: false
      })
      options.onSuccess?.(data)
      return data
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: err,
        isStale: true
      }))
      options.onError?.(err)
      throw err
    }
  }, [fetchFunction, state.data, isDataExpired, options])

  const invalidate = useCallback(() => {
    setState(prev => ({ 
      ...prev, 
      lastFetched: null,
      isStale: true
    }))
  }, [])

  // Auto-fetch on mount
  useEffect(() => {
    if (options.immediate !== false) {
      fetchData()
    }
  }, [fetchData, options.immediate])

  // Check for stale data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.data && isDataStale()) {
        setState(prev => ({ ...prev, isStale: true }))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [state.data, isDataStale])

  return {
    ...state,
    refetch: fetchData,
    invalidate,
    isStale: isDataStale()
  }
}