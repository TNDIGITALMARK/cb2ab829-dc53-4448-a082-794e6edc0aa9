'use client'

import { useState, useEffect, useRef } from 'react'

export const dynamic = 'force-dynamic'

export default function HeroPage() {
  const [clicks, setClicks] = useState(0)
  const [isShaking, setIsShaking] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [isInverted, setIsInverted] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showSecret, setShowSecret] = useState(false)
  const [cursorTrail, setCursorTrail] = useState<Array<{ id: number; x: number; y: number }>>([])
  const headlineRef = useRef<HTMLHeadingElement>(null)

  // Absurd click counter on the headline
  const handleHeadlineClick = () => {
    setClicks(clicks + 1)

    if (clicks === 6) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }

    if (clicks === 13) {
      setIsRotating(true)
      setTimeout(() => setIsRotating(false), 1000)
    }

    if (clicks === 20) {
      setIsInverted(true)
      setTimeout(() => setIsInverted(false), 2000)
    }

    if (clicks === 33) {
      setShowSecret(true)
      setTimeout(() => setShowSecret(false), 3000)
    }

    if (clicks === 66) {
      // Ultimate chaos mode
      setIsShaking(true)
      setIsRotating(true)
      setTimeout(() => {
        setIsShaking(false)
        setIsRotating(false)
        setClicks(0)
      }, 3000)
    }
  }

  // Particle explosion on button click
  const createParticleExplosion = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY
    }))

    setParticles([...particles, ...newParticles])
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
    }, 1000)
  }

  // Cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) { // Only add trail sometimes for performance
        setCursorTrail(prev => [
          ...prev.slice(-10),
          { id: Date.now(), x: e.clientX, y: e.clientY }
        ])
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Clean up old cursor trail
  useEffect(() => {
    if (cursorTrail.length > 0) {
      const timer = setTimeout(() => {
        setCursorTrail(prev => prev.slice(1))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [cursorTrail])

  // Konami code easter egg: up up down down left right left right b a
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let konamiIndex = 0

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++
        if (konamiIndex === konamiCode.length) {
          document.body.style.transform = 'rotate(180deg)'
          setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)'
          }, 3000)
          konamiIndex = 0
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden ${isInverted ? 'inverted-mode' : ''}`}>
      {/* Cursor trail */}
      {cursorTrail.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y
          }}
        />
      ))}

      {/* Particle system */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y
          }}
        />
      ))}

      {/* Secret message */}
      {showSecret && (
        <div className="secret-message">
          nice
        </div>
      )}

      <div className="spacing-md" />

      {/* Massively clickable headline with chaos modes */}
      <h1
        ref={headlineRef}
        className={`text-center animate-fade-in cursor-pointer select-none headline-interactive ${isShaking ? 'shake-crazy' : ''} ${isRotating ? 'rotate-chaos' : ''}`}
        onClick={handleHeadlineClick}
        onMouseEnter={() => {
          if (headlineRef.current) {
            headlineRef.current.style.transform = 'scale(1.05)'
          }
        }}
        onMouseLeave={() => {
          if (headlineRef.current) {
            headlineRef.current.style.transform = 'scale(1)'
          }
        }}
      >
        6-7
      </h1>

      {clicks > 0 && (
        <div className="click-counter animate-fade-in">
          clicks: {clicks} {clicks === 67 && '🎉'}
        </div>
      )}

      <div className="spacing-sm" />

      {/* Deadpan subheading with hover chaos */}
      <h2
        className="text-center text-muted-foreground animate-fade-in opacity-80 subheading-hover"
        onMouseEnter={(e) => {
          e.currentTarget.textContent = 'no really, you need to know'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.textContent = 'If you know, you know.'
        }}
      >
        If you know, you know.
      </h2>

      <div className="spacing-md" />

      {/* Minimal email capture with particle effects */}
      <form
        action="/waitlist"
        method="GET"
        className="w-full max-w-md animate-fade-in"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="your_email_here_obviously"
            required
            className="flex-1 px-6 py-4 text-center sm:text-left input-chaos"
            aria-label="Email address"
            onFocus={(e) => {
              e.currentTarget.placeholder = 'no seriously, put it here'
            }}
            onBlur={(e) => {
              e.currentTarget.placeholder = 'your_email_here_obviously'
            }}
          />
          <button
            type="submit"
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 button-chaos"
            onClick={createParticleExplosion}
            onMouseEnter={(e) => {
              e.currentTarget.textContent = 'DO IT'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.textContent = 'Join the 67'
            }}
          >
            Join the 67
          </button>
        </div>
      </form>

      <div className="spacing-md" />

      {/* Subtle navigation link with mystery */}
      <a
        href="/about"
        className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200 mystery-link"
        onMouseEnter={(e) => {
          e.currentTarget.textContent = '(you probably shouldn\'t click this)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.textContent = 'What is this?'
        }}
      >
        What is this?
      </a>

      <div className="spacing-sm" />

      {/* Hidden hint at the bottom */}
      <div className="absolute bottom-4 text-xs text-muted-foreground opacity-20 hover:opacity-100 transition-opacity">
        psst... try clicking the numbers
      </div>
    </div>
  )
}
