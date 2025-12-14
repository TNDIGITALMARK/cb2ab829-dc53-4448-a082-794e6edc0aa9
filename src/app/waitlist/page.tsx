export const dynamic = 'force-dynamic'

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="spacing-lg" />

      {/* Confirmation message - maintaining the joke */}
      <h1 className="text-center animate-fade-in">
        67
      </h1>

      <div className="spacing-sm" />

      <h2 className="text-center text-muted-foreground animate-fade-in">
        Welcome to nothing.
      </h2>

      <div className="spacing-md" />

      <p className="text-center max-w-md text-body animate-fade-in">
        You get it now. Check your email (or don't).
      </p>

      <div className="spacing-md" />

      {/* Navigation options */}
      <div className="flex gap-8 animate-fade-in">
        <a
          href="/"
          className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          ← Back
        </a>
        <a
          href="/about"
          className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Learn more (but why?)
        </a>
      </div>

      <div className="spacing-lg" />
    </div>
  )
}
