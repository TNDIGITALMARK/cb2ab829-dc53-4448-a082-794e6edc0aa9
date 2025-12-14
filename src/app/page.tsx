export const dynamic = 'force-dynamic'

export default function HeroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Massive 6-7 headline - the star of the show */}
      <div className="spacing-md" />

      <h1 className="text-center animate-fade-in">
        6-7
      </h1>

      <div className="spacing-sm" />

      {/* Deadpan subheading */}
      <h2 className="text-center text-muted-foreground animate-fade-in opacity-80">
        If you know, you know.
      </h2>

      <div className="spacing-md" />

      {/* Minimal email capture - intentionally simple */}
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
            className="flex-1 px-6 py-4 text-center sm:text-left"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
          >
            Join the 67
          </button>
        </div>
      </form>

      <div className="spacing-md" />

      {/* Subtle navigation link */}
      <a
        href="/about"
        className="text-small text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        What is this?
      </a>

      <div className="spacing-sm" />
    </div>
  )
}
