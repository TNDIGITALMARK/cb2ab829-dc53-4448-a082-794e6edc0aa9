'use client'

import { useState, useEffect } from 'react'

export const dynamic = 'force-dynamic'

export default function WaitlistPage() {
  const [confetti, setConfetti] = useState(false)
  const [celebrating, setCelebrating] = useState(false)
  const [hoverCount, setHoverCount] = useState(0)

  // Automatic celebration on mount
  useEffect(() => {
    setTimeout(() => {
      setCelebrating(true)
      setTimeout(() => setCelebrating(false), 2000)
    }, 500)
  }, [])

  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="spacing-lg" />

      {/* Confetti particles */}
      {confetti && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Confirmation message - maintaining the joke */}
      <h1
        className={`text-center animate-fade-in cursor-pointer select-none ${celebrating ? 'celebration-mode' : ''}`}
        onClick={triggerConfetti}
        onMouseEnter={() => setHoverCount(prev => prev + 1)}
      >
        {hoverCount > 5 ? '666-777' : '67'}
      </h1>

      <div className="spacing-sm" />

      <h2 className="text-center text-muted-foreground animate-fade-in">
        {confetti ? 'CHAOS ACHIEVED' : celebrating ? 'You did it!' : 'Welcome to nothing.'}
      </h2>

      <div className="spacing-md" />

      <p
        className="text-center max-w-md text-body animate-fade-in cursor-help"
        title="Why are you hovering over this?"
        onDoubleClick={(e) => {
          e.currentTarget.textContent = 'There is no email. This is performance art.'
        }}
      >
        You get it now. Check your email (or don't).
      </p>

      <div className="spacing-md" />

      {/* Hidden achievement for excessive interaction */}
      {hoverCount > 10 && (
        <div className="achievement-popup animate-fade-in">
          <p className="font-bold">🏆 Achievement Unlocked</p>
          <p className="text-xs mt-2">Over-Hover Champion</p>
        </div>
      )}

      {/* Navigation options with mystery */}
      <div className="flex gap-8 animate-fade-in">
        <a
          href="/"
          className="text-small text-muted-foreground hover:text-foreground transition-all duration-200 chaos-link"
          onMouseEnter={(e) => {
            e.currentTarget.textContent = '← BACK TO THE VOID'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.textContent = '← Back'
          }}
        >
          ← Back
        </a>
        <a
          href="/about"
          className="text-small text-muted-foreground hover:text-foreground transition-all duration-200 chaos-link"
          onMouseEnter={(e) => {
            e.currentTarget.textContent = 'Why would you want to learn more? →'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.textContent = 'Learn more (but why?)'
          }}
        >
          Learn more (but why?)
        </a>
      </div>

      {/* Secret instruction */}
      <div className="absolute bottom-8 text-xs text-muted-foreground opacity-20 hover:opacity-100 transition-opacity text-center">
        <p>click the numbers for party mode</p>
        <p className="mt-1">hover everywhere for secrets</p>
      </div>

      <div className="spacing-lg" />
    </div>
  )
}
