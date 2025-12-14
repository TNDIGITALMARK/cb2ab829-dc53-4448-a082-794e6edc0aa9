export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="spacing-lg" />

      <div className="max-w-2xl w-full space-y-16">
        {/* Intentionally vague headline */}
        <div className="animate-fade-in">
          <h1 className="text-center mb-8">About 6-7</h1>
          <h2 className="text-center text-muted-foreground">
            An explanation that explains nothing.
          </h2>
        </div>

        <div className="spacing-sm" />

        {/* Absurdist content sections */}
        <div className="space-y-12 animate-fade-in">
          <div>
            <h3 className="mb-4 text-foreground">What is 6-7?</h3>
            <p className="text-muted-foreground leading-relaxed">
              It's exactly what you think it is. Or maybe it isn't. The point is,
              if you're here, you already know. And if you don't know, well, that's
              the point too.
            </p>
          </div>

          <div className="spacing-xs" />

          <div>
            <h3 className="mb-4 text-foreground">Why 6-7?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Why not? The numbers speak for themselves. Some say it's profound.
              Others say it's nothing. Both are correct. Neither are wrong.
            </p>
          </div>

          <div className="spacing-xs" />

          <div>
            <h3 className="mb-4 text-foreground">Who is this for?</h3>
            <p className="text-muted-foreground leading-relaxed">
              People who get it. Internet natives. Meme scholars. Those who
              appreciate commitment to a bit. Anyone who has ever said "if you know,
              you know" unironically.
            </p>
          </div>

          <div className="spacing-xs" />

          <div>
            <h3 className="mb-4 text-foreground">What happens next?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing. Everything. We're building something that is intentionally
              pointless yet perfectly executed. It's art. It's comedy. It's 6-7.
            </p>
          </div>
        </div>

        <div className="spacing-md" />

        {/* Navigation back */}
        <div className="flex justify-center gap-8 animate-fade-in">
          <a
            href="/"
            className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← Back to 6-7
          </a>
          <a
            href="/waitlist"
            className="text-small text-foreground hover:text-muted-foreground transition-colors duration-200"
          >
            Join the movement →
          </a>
        </div>
      </div>

      <div className="spacing-lg" />
    </div>
  )
}
