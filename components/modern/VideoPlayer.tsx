"use client"

import { memo, useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface VideoPlayerProps {
  src: string
  className?: string
  poster?: string
}

const VideoPlayer = memo(function VideoPlayer({ src, className, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      })
      return () => {
        hls.destroy()
      }
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      const onLoaded = () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      }
      video.addEventListener('loadedmetadata', onLoaded)
      return () => {
        video.removeEventListener('loadedmetadata', onLoaded)
      }
    }

    return undefined
  }, [src])

  return (
    <video
      ref={videoRef}
      muted
      loop
      autoPlay
      playsInline
      poster={poster}
      className={className}
      aria-hidden="true"
    />
  )
})

export default VideoPlayer
