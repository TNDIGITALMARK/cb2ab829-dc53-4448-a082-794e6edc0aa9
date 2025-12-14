'use client'

import { useState, useEffect, useRef } from 'react'

export const dynamic = 'force-dynamic'

interface Achievement {
  id: number
  title: string
  description: string
}

interface FloatingMeme {
  id: number
  text: string
  x: number
  y: number
}

export default function HeroPage() {
  const [clicks, setClicks] = useState(0)
  const [isShaking, setIsShaking] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [isInverted, setIsInverted] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showSecret, setShowSecret] = useState(false)
  const [cursorTrail, setCursorTrail] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [floatingMemes, setFloatingMemes] = useState<FloatingMeme[]>([])
  const [matrixMode, setMatrixMode] = useState(false)
  const [discoMode, setDiscoMode] = useState(false)
  const [earthquakeMode, setEarthquakeMode] = useState(false)
  const [rainbowText, setRainbowText] = useState(false)
  const [showCombo, setShowCombo] = useState(false)
  const [comboCount, setComboCount] = useState(0)
  const [fireMode, setFireMode] = useState(false)
  const [zoomChaos, setZoomChaos] = useState(false)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Floating emoji decorations
  const floatingEmojis = ['🔥', '💎', '⚡', '🌈', '✨', '💥', '🎮', '🕹️', '👾', '🎯', '🚀', '💫']

  // Unlock achievement system
  const unlockAchievement = (title: string, description: string) => {
    const newAchievement = {
      id: Date.now(),
      title,
      description
    }
    setAchievements(prev => [...prev, newAchievement])
    setTimeout(() => {
      setAchievements(prev => prev.filter(a => a.id !== newAchievement.id))
    }, 5000)
  }

  // Spawn floating meme
  const spawnFloatingMeme = (text: string) => {
    const newMeme: FloatingMeme = {
      id: Date.now(),
      text,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }
    setFloatingMemes(prev => [...prev, newMeme])
    setTimeout(() => {
      setFloatingMemes(prev => prev.filter(m => m.id !== newMeme.id))
    }, 5000)
  }

  // INSANE click counter on the headline with MORE chaos
  const handleHeadlineClick = () => {
    const newClicks = clicks + 1
    setClicks(newClicks)

    // Combo system
    setComboCount(newClicks)
    setShowCombo(true)
    setTimeout(() => setShowCombo(false), 1000)

    if (newClicks === 3) {
      unlockAchievement('First Blood', 'You clicked 3 times')
      spawnFloatingMeme('nice start')
    }

    if (newClicks === 7) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      unlockAchievement('Lucky 7', 'The sacred number!')
      spawnFloatingMeme('6-7 baby')
    }

    if (newClicks === 13) {
      setIsRotating(true)
      setTimeout(() => setIsRotating(false), 1000)
      unlockAchievement('Unlucky 13', 'Spooky')
      spawnFloatingMeme('spooked')
    }

    if (newClicks === 20) {
      setIsInverted(true)
      setTimeout(() => setIsInverted(false), 2000)
      unlockAchievement('Inverted', 'Reality bends')
      spawnFloatingMeme('upside down')
    }

    if (newClicks === 30) {
      setDiscoMode(true)
      setTimeout(() => setDiscoMode(false), 3000)
      unlockAchievement('DISCO INFERNO', 'Party mode activated!')
      spawnFloatingMeme('💃🕺')
    }

    if (newClicks === 42) {
      setMatrixMode(true)
      setTimeout(() => setMatrixMode(false), 5000)
      unlockAchievement('The Answer', 'To life, universe, everything')
      spawnFloatingMeme('red pill taken')
    }

    if (newClicks === 50) {
      setEarthquakeMode(true)
      setTimeout(() => setEarthquakeMode(false), 3000)
      unlockAchievement('EARTHQUAKE', 'The ground shakes!')
      spawnFloatingMeme('💥💥💥')
    }

    if (newClicks === 67) {
      setRainbowText(true)
      unlockAchievement('6-7 MASTER', 'You understand the sacred truth!')
      spawnFloatingMeme('✨ LEGENDARY ✨')
    }

    if (newClicks === 69) {
      unlockAchievement('nice', 'nice')
      spawnFloatingMeme('nice')
    }

    if (newClicks === 88) {
      setFireMode(true)
      setTimeout(() => setFireMode(false), 5000)
      unlockAchievement('🔥 ON FIRE 🔥', 'Unstoppable!')
      spawnFloatingMeme('FLAMES')
    }

    if (newClicks === 99) {
      setZoomChaos(true)
      setTimeout(() => setZoomChaos(false), 4000)
      unlockAchievement('Zoom Meeting From Hell', 'Everyone joined')
      spawnFloatingMeme('you\'re on mute')
    }

    if (newClicks === 100) {
      // ULTIMATE CHAOS MODE - EVERYTHING AT ONCE
      setIsShaking(true)
      setIsRotating(true)
      setDiscoMode(true)
      setEarthquakeMode(true)
      setRainbowText(true)
      setFireMode(true)
      unlockAchievement('🌟 CENTURY 🌟', 'You clicked 100 times. Legendary.')
      spawnFloatingMeme('ABSOLUTE MADLAD')
      setTimeout(() => {
        setIsShaking(false)
        setIsRotating(false)
        setDiscoMode(false)
        setEarthquakeMode(false)
        setFireMode(false)
        setClicks(0)
        setComboCount(0)
        setRainbowText(false)
      }, 5000)
    }
  }

  // Particle explosion on button click
  const createParticleExplosion = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
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
      if (Math.random() > 0.7) {
        setCursorTrail(prev => [
          ...prev.slice(-15),
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
      }, 50)
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
          unlockAchievement('KONAMI CODE', 'Classic gamer!')
          spawnFloatingMeme('↑↑↓↓←→←→BA')
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

  // Matrix mode effect
  useEffect(() => {
    if (matrixMode) {
      const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      const columns = Math.floor(window.innerWidth / 20)
      const drops: number[] = Array(columns).fill(1)

      const drawMatrix = () => {
        const canvas = document.createElement('canvas')
        canvas.className = 'matrix-mode'
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const ctx = canvas.getContext('2d')

        if (ctx && containerRef.current) {
          containerRef.current.appendChild(canvas)

          const interval = setInterval(() => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = '#0F0'
            ctx.font = '15px monospace'

            for (let i = 0; i < drops.length; i++) {
              const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
              ctx.fillText(text, i * 20, drops[i] * 20)

              if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0
              }
              drops[i]++
            }
          }, 33)

          setTimeout(() => {
            clearInterval(interval)
            canvas.remove()
          }, 5000)
        }
      }

      drawMatrix()
    }
  }, [matrixMode])

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden ${isInverted ? 'inverted-mode' : ''} ${discoMode ? 'disco-mode' : ''} ${earthquakeMode ? 'earthquake-mode' : ''}`}
      style={{
        background: `
          radial-gradient(circle at 20% 80%, hsla(330, 100%, 50%, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsla(180, 100%, 50%, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, hsla(120, 100%, 50%, 0.1) 0%, transparent 50%)
        `
      }}
    >
      {/* Floating decorative emojis */}
      {floatingEmojis.map((emoji, i) => (
        <div
          key={`emoji-${i}`}
          className="floating-meme"
          style={{
            left: `${(i * 8.33)}%`,
            top: `${(i * 5) % 80}%`,
            fontSize: '48px',
            opacity: 0.3,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + (i % 3)}s`
          }}
        >
          {emoji}
        </div>
      ))}

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

      {/* Achievement notifications */}
      {achievements.map((achievement, index) => (
        <div
          key={achievement.id}
          className="achievement"
          style={{ top: `${20 + index * 100}px` }}
        >
          <div style={{ fontSize: '18px', marginBottom: '4px' }}>🏆 {achievement.title}</div>
          <div style={{ fontSize: '14px', opacity: 0.8 }}>{achievement.description}</div>
        </div>
      ))}

      {/* Floating memes */}
      {floatingMemes.map(meme => (
        <div
          key={meme.id}
          className="floating-meme"
          style={{
            left: meme.x,
            top: meme.y
          }}
        >
          {meme.text}
        </div>
      ))}

      {/* Combo counter */}
      {showCombo && comboCount > 5 && (
        <div className="combo-counter">
          {comboCount}x COMBO!
        </div>
      )}

      {/* Fire effect */}
      {fireMode && <div className="fire-effect" />}

      {/* Zoom chaos overlay */}
      {zoomChaos && (
        <div className="zoom-chaos">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="zoom-face">
              {['😀', '😂', '🤔', '😱', '🤯', '🥴', '😴', '🤪', '😎'][i]}
            </div>
          ))}
        </div>
      )}

      <div className="spacing-md" />

      {/* Massively clickable headline with MAXIMUM chaos modes */}
      <h1
        ref={headlineRef}
        className={`text-center animate-fade-in cursor-pointer select-none headline-interactive ${isShaking ? 'shake-crazy' : ''} ${isRotating ? 'rotate-chaos' : ''} ${rainbowText ? 'rainbow-text' : ''}`}
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
          clicks: {clicks} {clicks === 67 && '✨'} {clicks === 69 && '😏'} {clicks >= 100 && '🔥'}
        </div>
      )}

      <div className="spacing-sm" />

      {/* Deadpan subheading with MORE hover chaos */}
      <h2
        className="text-center text-muted-foreground animate-fade-in opacity-80 subheading-hover"
        onMouseEnter={(e) => {
          const phrases = [
            'no really, you need to know',
            'it\'s not just a number',
            'the prophecy speaks of this',
            'you wouldn\'t get it',
            'extremely online behavior',
            'this is the way'
          ]
          e.currentTarget.textContent = phrases[Math.floor(Math.random() * phrases.length)]
        }}
        onMouseLeave={(e) => {
          e.currentTarget.textContent = 'If you know, you know.'
        }}
      >
        If you know, you know.
      </h2>

      <div className="spacing-md" />

      {/* Enhanced email capture with MORE particle effects */}
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
              const placeholders = [
                'no seriously, put it here',
                'type it, I dare you',
                'don\'t be shy',
                'the prophecy requires your email',
                'just do it already'
              ]
              e.currentTarget.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)]
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
              const texts = [
                'DO IT',
                'CLICK ME',
                'YES',
                'SUBMIT',
                'JOIN US',
                'BECOME ONE OF US'
              ]
              e.currentTarget.textContent = texts[Math.floor(Math.random() * texts.length)]
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

      {/* Mystery navigation link with ENHANCED chaos */}
      <a
        href="/about"
        className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200 mystery-link"
        onMouseEnter={(e) => {
          const warnings = [
            '(you probably shouldn\'t click this)',
            '(no seriously, don\'t)',
            '(last warning)',
            '(abandon all hope)',
            '(here be dragons)',
            '(why are you still hovering?)'
          ]
          e.currentTarget.textContent = warnings[Math.floor(Math.random() * warnings.length)]
        }}
        onMouseLeave={(e) => {
          e.currentTarget.textContent = 'What is this?'
        }}
      >
        What is this?
      </a>

      <div className="spacing-sm" />

      {/* VIRAL MODE TOGGLE */}
      <button
        onClick={() => {
          setDiscoMode(true)
          setRainbowText(true)
          setFireMode(true)
          unlockAchievement('🔥 VIRAL MODE 🔥', 'You activated MAXIMUM CHAOS!')
          spawnFloatingMeme('THIS IS WILD')
          setTimeout(() => {
            setDiscoMode(false)
            setFireMode(false)
          }, 5000)
        }}
        className="fixed top-4 left-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-full neon-box hover:scale-110 transition-transform z-50"
        style={{
          textShadow: '0 0 10px rgba(255,255,255,0.8)',
          boxShadow: '0 0 30px rgba(255,0,255,0.5), 0 0 60px rgba(0,255,255,0.3)'
        }}
      >
        🚀 VIRAL MODE 🚀
      </button>

      {/* Enhanced hint at the bottom */}
      <div className="absolute bottom-4 text-xs text-muted-foreground opacity-20 hover:opacity-100 transition-opacity neon-text">
        psst... try clicking the numbers • try the konami code • click 100 times for enlightenment • VIRAL MODE button top left
      </div>

      {/* Easter egg: Double-click anywhere */}
      <div
        className="fixed inset-0 z-[-1]"
        onDoubleClick={() => {
          spawnFloatingMeme('👀')
          unlockAchievement('Double Trouble', 'Found a secret!')
        }}
      />
    </div>
  )
}
