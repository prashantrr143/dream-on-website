"use client"

import { useEffect, useState } from 'react'

interface ResponsiveWrapperProps {
  children: React.ReactNode
}

const ResponsiveWrapper = ({ children }: ResponsiveWrapperProps) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div 
      className={`
        min-h-screen w-full overflow-x-hidden
        ${screenSize === 'mobile' ? 'text-sm' : screenSize === 'tablet' ? 'text-base' : 'text-lg'}
      `}
      data-screen-size={screenSize}
    >
      {children}
    </div>
  )
}

export default ResponsiveWrapper