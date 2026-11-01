"use client"

import { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { armSoundOnFirstGesture, isSoundOn, onSoundChange, setSound } from '@/lib/sound'

export function SoundToggle() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    setOn(isSoundOn())
    armSoundOnFirstGesture()
    return onSoundChange(setOn)
  }, [])
  return (
    <button
      type="button"
      className={`ys-hdr-icon ys-sound-toggle${on ? ' is-on' : ''}`}
      aria-pressed={on}
      aria-label={on ? 'Turn sound off' : 'Turn sound on'}
      title={on ? 'Sound on' : 'Sound off'}
      onClick={() => setSound(!on)}
    >
      {on
        ? <Volume2 className="w-[20px] h-[20px]" strokeWidth={1.75} aria-hidden="true" />
        : <VolumeX className="w-[20px] h-[20px]" strokeWidth={1.75} aria-hidden="true" />}
      {on && <span className="ys-sound-eq" aria-hidden="true"><i /><i /><i /></span>}
    </button>
  )
}
