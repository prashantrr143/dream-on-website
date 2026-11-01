'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { BrainCircuit, Lightbulb, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { loadGsap, prefersReducedMotion } from '@/lib/gsap'
import { playSound, type SoundName } from '@/lib/sound'

const SOUND_FOR: SoundName[] = ['ideas', 'intelligence', 'impact']

/**
 * Home hero, right side: the YatiSphere mark tells the brand mission,
 * Ideas -> Intelligence -> Impact. A ring of light draws around the mark,
 * each stage lights its node, the glow shifts through the logo's own
 * colours (cyan, blue, orange) and a short line names the stage. Then all
 * three hold together and the story starts again.
 *
 * GSAP drives it (lib/gsap). Without GSAP, or under reduced motion, the
 * finished state shows: all three stages lit and the tagline. Decorative
 * to assistive tech except the mission sentence, which is real text.
 */

type Stage = { word: string; line: string; Icon: LucideIcon; color: string; color2: string; glow: string; angle: number }

const STAGES: Stage[] = [
  { word: 'Ideas', line: 'Start with the problem worth solving.', Icon: Lightbulb, color: '#22C3F0', color2: '#7FE3FF', glow: 'rgb(34 195 240 / 0.55)', angle: -150 },
  { word: 'Intelligence', line: 'Architecture, data and governed AI that fit.', Icon: BrainCircuit, color: '#7FA2FF', color2: '#D6E2FF', glow: 'rgb(31 79 191 / 0.7)', angle: -30 },
  { word: 'Impact', line: 'Systems in production that pay back.', Icon: TrendingUp, color: '#F8B800', color2: '#FF8A1F', glow: 'rgb(248 150 0 / 0.55)', angle: 90 },
]

const C = 220 // centre of the 440 x 440 stage
const R = 200 // ring radius
const pos = (deg: number) => ({ x: C + R * Math.cos((deg * Math.PI) / 180), y: C + R * Math.sin((deg * Math.PI) / 180) })

export function BrandMark() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return
    let gone = false
    const kills: Array<() => void> = []

    loadGsap().then((g) => {
      if (gone || !g) return
      const q = <T extends Element>(s: string) => Array.from(root.querySelectorAll<T>(s))
      const tilt = root.querySelector<HTMLElement>('.ys-bm-tilt')
      const mark = root.querySelector<HTMLElement>('.ys-bm-img')
      const arc = root.querySelector<SVGCircleElement>('.ys-bm-arc')
      const burst = root.querySelector<HTMLElement>('.ys-bm-burst')
      const nodes = q<HTMLElement>('.ys-bm-node')
      const words = q<HTMLElement>('.ys-bm-stage')
      const finale = root.querySelector<HTMLElement>('.ys-bm-finale')
      if (!tilt || !mark || !arc || !finale) return

      root.classList.add('is-live')

      // Entrance
      g.fromTo(mark, { scale: 0.85, opacity: 0, y: 24 }, { scale: 1, opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' })
      g.fromTo(q('.ys-bm-orbit'), { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.2 })
      const spin = g.to(q('.ys-bm-orbit'), { rotate: -360, duration: 90, ease: 'none', repeat: -1 })
      const float = g.to(mark, { y: -12, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.3 })

      // The story
      const swapTo = (tl: any, el: HTMLElement | undefined, at: string | number) => {
        tl.to([...words, finale].filter((w) => w !== el), { opacity: 0, y: -8, duration: 0.35, ease: 'power2.in' }, at)
        if (el) tl.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '>-0.05')
      }
      const tl = g.timeline({ repeat: -1, delay: 1.2 })
      tl.set(arc, { strokeDashoffset: 360 })
        .set(nodes, { '--on': 0 })
        .call(() => nodes.forEach((n) => n.classList.remove('is-on')))
        .set([...words, finale], { opacity: 0, y: 12 })

      STAGES.forEach((s, i) => {
        const label = `s${i}`
        if (i > 0) tl.to(arc, { strokeDashoffset: 360 - i * 120, duration: 0.9, ease: 'power2.inOut' })
        tl.addLabel(label)
        tl.call(() => nodes[i]?.classList.add('is-on'), undefined, label)
        tl.call(() => playSound(SOUND_FOR[i] ?? 'ideas'), undefined, label)
        if (nodes[i]) tl.fromTo(nodes[i], { scale: 0.6 }, { scale: 1, duration: 0.6, ease: 'back.out(2.2)' }, label)
        tl.to(root, { '--bm-glow': s.glow, '--bm-accent': s.color, duration: 0.8, ease: 'power2.out' }, label)
        tl.fromTo(mark, { scale: 1 }, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.out' }, label)
        swapTo(tl, words[i], label)
        if (i === STAGES.length - 1 && burst) {
          tl.fromTo(burst, { scale: 0.4, opacity: 0.9 }, { scale: 1.35, opacity: 0, duration: 1.2, ease: 'power2.out' }, label)
        }
        tl.to({}, { duration: 1.7 })
      })

      // Close the ring back to Ideas, then all three together
      tl.to(arc, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' })
      tl.addLabel('finale')
      tl.call(() => playSound('finale'), undefined, 'finale')
      tl.to(root, { '--bm-glow': 'rgb(31 79 191 / 0.6)', '--bm-accent': '#F8B800', duration: 0.8 }, 'finale')
      tl.fromTo(nodes, { scale: 1 }, { scale: 1.15, duration: 0.25, yoyo: true, repeat: 1, stagger: 0.08 }, 'finale')
      swapTo(tl, finale, 'finale')
      tl.to({}, { duration: 2.6 })
      tl.to([finale, arc], { opacity: 0, duration: 0.5 })
      tl.set(arc, { opacity: 1 })

      // Tilt toward the pointer
      const ry = g.quickTo(tilt, 'rotateY', { duration: 0.9, ease: 'power3.out' })
      const rx = g.quickTo(tilt, 'rotateX', { duration: 0.9, ease: 'power3.out' })
      const hero = root.closest('section')
      const onMove = (e: PointerEvent) => {
        const r = root.getBoundingClientRect()
        ry(((e.clientX - r.left) / r.width - 0.5) * 12)
        rx(-((e.clientY - r.top) / r.height - 0.5) * 8)
      }
      const onLeave = () => { ry(0); rx(0) }
      hero?.addEventListener('pointermove', onMove)
      hero?.addEventListener('pointerleave', onLeave)

      kills.push(() => {
        tl.kill(); spin.kill(); float.kill()
        hero?.removeEventListener('pointermove', onMove)
        hero?.removeEventListener('pointerleave', onLeave)
      })
    })

    return () => { gone = true; kills.forEach((k) => k()) }
  }, [])

  return (
    <div className="ys-bm" ref={ref}>
      <p className="sr-only">Our mission: ideas, intelligence, impact.</p>
      <div className="ys-bm-tilt" aria-hidden="true">
        <span className="ys-bm-glow" />
        <span className="ys-bm-orbit"><i /></span>
        <span className="ys-bm-burst" />
        <svg className="ys-bm-ring" viewBox="0 0 440 440">
          <defs>
            <linearGradient id="ys-bm-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22C3F0" />
              <stop offset="50%" stopColor="#1F4FBF" />
              <stop offset="100%" stopColor="#F89600" />
            </linearGradient>
          </defs>
          <circle className="ys-bm-track" cx={C} cy={C} r={R} />
          <circle className="ys-bm-arc" cx={C} cy={C} r={R} pathLength={360} transform={`rotate(${STAGES[0]!.angle} ${C} ${C})`} />
        </svg>
        <Image
          className="ys-bm-img"
          src="/brand/yatisphere/icon/yatisphere-icon-1024.png"
          alt=""
          width={1024}
          height={1024}
          sizes="420px"
          loading="eager"
        />
        {STAGES.map(({ word, Icon, color, angle }, i) => {
          const p = pos(angle)
          return (
            <span
              key={word}
              className={`ys-bm-node is-on is-${i}`}
              style={{ left: `${(p.x / 440) * 100}%`, top: `${(p.y / 440) * 100}%`, ['--node' as string]: color }}
            >
              <span className="ys-bm-dot"><Icon className="w-[22px] h-[22px]" strokeWidth={2.2} /></span>
              <span className="ys-bm-label">{word}</span>
            </span>
          )
        })}
      </div>

      <div className="ys-bm-copy" aria-hidden="true">
        {STAGES.map(({ word, line, color, color2 }, i) => (
          <p key={word} className="ys-bm-stage" style={{ ['--node' as string]: color, ['--node2' as string]: color2 }}>
            <span className="ys-bm-count">0{i + 1}<i>/ 03</i></span>
            <span className="ys-bm-word">{word}</span>
            <span className="ys-bm-bar" />
            <span className="ys-bm-line">{line}</span>
          </p>
        ))}
        <p className="ys-bm-finale">
          {STAGES.map(({ word, color, color2 }, i) => (
            <span key={word} style={{ ['--node' as string]: color, ['--node2' as string]: color2 }}>
              {i > 0 && <b aria-hidden="true">•</b>}
              <em>{word}</em>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
