/**
 * Opt-in UI sound. Off by default; the visitor turns it on from the header.
 * Every tone is synthesised with Web Audio, so there are no audio files to
 * download and nothing plays until the visitor has clicked the toggle.
 */
export type SoundName = 'ideas' | 'intelligence' | 'impact' | 'finale' | 'open' | 'tap' | 'success'

const KEY = 'ys-sound'
let enabled = false
let ctx: AudioContext | null = null
let out: GainNode | null = null
const subs = new Set<(on: boolean) => void>()

try { enabled = typeof window !== 'undefined' && window.localStorage.getItem(KEY) === 'on' } catch { /* storage blocked */ }

function audio(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
    // Master -> soft echo for a little air, kept quiet on purpose.
    out = ctx.createGain()
    out.gain.value = 0.14
    const delay = ctx.createDelay()
    delay.delayTime.value = 0.18
    const fb = ctx.createGain()
    fb.gain.value = 0.22
    const wet = ctx.createGain()
    wet.gain.value = 0.35
    out.connect(ctx.destination)
    out.connect(delay)
    delay.connect(fb).connect(delay)
    delay.connect(wet).connect(ctx.destination)
  }
  return ctx
}

function tone(freq: number, at: number, dur: number, level = 1, type: OscillatorType = 'sine') {
  const c = ctx, o = out
  if (!c || !o) return
  const t = c.currentTime + at
  const g = c.createGain()
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(level, t + 0.012)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  g.connect(o)
  // Fundamental plus a quiet octave gives a soft bell rather than a beep.
  for (const [mult, amp, kind] of [[1, 1, type], [2, 0.18, 'sine']] as const) {
    const osc = c.createOscillator()
    const og = c.createGain()
    osc.type = kind
    osc.frequency.setValueAtTime(freq * mult, t)
    og.gain.value = amp
    osc.connect(og).connect(g)
    osc.start(t)
    osc.stop(t + dur + 0.05)
  }
}

// C major: Ideas C5, Intelligence E5, Impact G5, finale the full chord.
const SOUNDS: Record<SoundName, () => void> = {
  ideas: () => tone(523.25, 0, 1.1, 0.8),
  intelligence: () => tone(659.25, 0, 1.1, 0.75),
  impact: () => { tone(783.99, 0, 1.4, 0.8); tone(392, 0, 1.4, 0.35, 'triangle') },
  finale: () => { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.07, 1.8, 0.45)) },
  open: () => tone(392, 0, 0.35, 0.35, 'triangle'),
  tap: () => tone(880, 0, 0.12, 0.2),
  success: () => { tone(659.25, 0, 0.5, 0.6); tone(987.77, 0.11, 0.9, 0.6) },
}

export function playSound(name: SoundName) {
  if (!enabled || typeof document === 'undefined' || document.hidden) return
  const c = audio()
  if (!c || c.state !== 'running') return
  SOUNDS[name]()
}

export function isSoundOn() { return enabled }

export function setSound(on: boolean) {
  enabled = on
  try { window.localStorage.setItem(KEY, on ? 'on' : 'off') } catch { /* storage blocked */ }
  if (on) {
    const c = audio()
    // Called from the toggle's click, so the browser allows resume().
    void c?.resume().then(() => SOUNDS.tap())
  }
  subs.forEach((fn) => fn(on))
}

export function onSoundChange(fn: (on: boolean) => void) {
  subs.add(fn)
  return () => { subs.delete(fn) }
}

/** A saved "on" still needs one user gesture before audio may start. */
export function armSoundOnFirstGesture() {
  if (typeof window === 'undefined') return
  const wake = () => { if (enabled) void audio()?.resume() }
  window.addEventListener('pointerdown', wake, { once: true })
  window.addEventListener('keydown', wake, { once: true })
}
