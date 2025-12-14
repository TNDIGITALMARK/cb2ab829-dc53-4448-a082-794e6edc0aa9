export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="spacing-lg" />

      <h1 className="text-center animate-fade-in">
        404
      </h1>

      <div className="spacing-sm" />

      <h2 className="text-center text-muted-foreground animate-fade-in">
        This page doesn't exist. Neither does 6-7. But here we are.
      </h2>

      <div className="spacing-md" />

      <a
        href="/"
        className="text-body text-foreground hover:text-muted-foreground transition-colors duration-200"
      >
        ← Back to wherever
      </a>

      <div className="spacing-lg" />
    </div>
  )
}