'use client'

import { useState, useEffect } from 'react'

export const dynamic = 'force-dynamic'

export default function AboutPage() {
  const [doubleClicked, setDoubleClicked] = useState(false)
  const [readCount, setReadCount] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleHeadlineDoubleClick = () => {
    setDoubleClicked(!doubleClicked)
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 ${isGlitching ? 'glitch-mode' : ''}`}>
      <div className="spacing-lg" />

      <div className="max-w-2xl w-full space-y-16">
        {/* Intentionally vague headline with double-click surprise */}
        <div className="animate-fade-in">
          <h1
            className="text-center mb-8 cursor-pointer select-none hover:opacity-70 transition-opacity"
            onDoubleClick={handleHeadlineDoubleClick}
          >
            {doubleClicked ? 'Still 6-7' : 'About 6-7'}
          </h1>
          <h2 className="text-center text-muted-foreground">
            {doubleClicked ? 'Surprise! Nothing changed.' : 'An explanation that explains nothing.'}
          </h2>
        </div>

        <div className="spacing-sm" />

        {/* Absurdist content sections with hover effects */}
        <div className="space-y-12 animate-fade-in">
          <div
            className="hover-section"
            onMouseEnter={() => setReadCount(prev => prev + 1)}
          >
            <h3 className="mb-4 text-foreground">What is 6-7?</h3>
            <p className="text-muted-foreground leading-relaxed">
              It's exactly what you think it is. Or maybe it isn't. The point is,
              if you're here, you already know. And if you don't know, well, that's
              the point too. {readCount > 3 && '(Stop reading this over and over.)'}
            </p>
          </div>

          <div className="spacing-xs" />

          <div className="hover-section">
            <h3 className="mb-4 text-foreground">Why 6-7?</h3>
            <p
              className="text-muted-foreground leading-relaxed cursor-help"
              title="Seriously, why are you hovering?"
            >
              Why not? The numbers speak for themselves. Some say it's profound.
              Others say it's nothing. Both are correct. Neither are wrong.
            </p>
          </div>

          <div className="spacing-xs" />

          <div
            className="hover-section"
            onDoubleClick={(e) => {
              e.currentTarget.style.transform = 'rotate(180deg)'
              setTimeout(() => {
                e.currentTarget.style.transform = 'rotate(0deg)'
              }, 1000)
            }}
            style={{ transition: 'transform 1s ease' }}
          >
            <h3 className="mb-4 text-foreground">Who is this for?</h3>
            <p className="text-muted-foreground leading-relaxed">
              People who get it. Internet natives. Meme scholars. Those who
              appreciate commitment to a bit. Anyone who has ever said "if you know,
              you know" unironically. <span className="text-xs opacity-50">(Try double-clicking this section)</span>
            </p>
          </div>

          <div className="spacing-xs" />

          <div className="hover-section">
            <h3 className="mb-4 text-foreground">What happens next?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing. Everything. We're building something that is intentionally
              pointless yet perfectly executed. It's art. It's comedy. It's 6-7.
            </p>
          </div>

          {/* Hidden revelation after reading many times */}
          {readCount > 10 && (
            <div className="animate-fade-in border-2 border-foreground p-8 text-center">
              <h3 className="mb-4 text-foreground">The Truth</h3>
              <p className="text-muted-foreground leading-relaxed">
                You've hovered over these sections {readCount} times. That dedication
                deserves recognition. The truth is: there is no truth. 6-7 is whatever
                you want it to be. It's performance art. It's a social experiment. It's
                absolutely nothing and somehow everything at once.
              </p>
            </div>
          )}
        </div>

        <div className="spacing-md" />

        {/* Navigation back with chaos */}
        <div className="flex justify-center gap-8 animate-fade-in">
          <a
            href="/"
            className="text-small text-muted-foreground hover:text-foreground transition-all duration-200 mystery-hover"
            onMouseEnter={(e) => {
              e.currentTarget.textContent = '← ESCAPE'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.textContent = '← Back to 6-7'
            }}
          >
            ← Back to 6-7
          </a>
          <a
            href="/waitlist"
            className="text-small text-foreground hover:text-muted-foreground transition-all duration-200 mystery-hover"
            onMouseEnter={(e) => {
              e.currentTarget.textContent = 'JOIN US →'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.textContent = 'Join the movement →'
            }}
          >
            Join the movement →
          </a>
        </div>

        {/* Secret hint */}
        <div className="text-center text-xs text-muted-foreground opacity-20 hover:opacity-100 transition-opacity animate-fade-in">
          <p>try double-clicking the headline</p>
          <p className="mt-2">or just keep reading... and reading... and reading...</p>
        </div>
      </div>

      <div className="spacing-lg" />
    </div>
  )
}
