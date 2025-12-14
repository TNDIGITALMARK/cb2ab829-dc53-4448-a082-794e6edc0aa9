# 6-7 Meme Landing Page

A viral meme-driven landing page inspired by the "6-7 / 67" meme, featuring intentionally absurd minimalism with perfect execution.

## Design Philosophy

**Commitment to the Bit**: This landing page exists as both a joke and a genuine demonstration of how internet phenomena can be transformed into engaging digital experiences. The entire aesthetic commits fully to absurdist minimalism while maintaining professional execution.

## Design System

### Typography
- **Hero Headline**: Massive 400px+ on desktop, scales to 120px+ on mobile
- **Subheadings**: 24-48px with deadpan copy
- **Body Text**: 18-24px, clean and readable
- **Font**: Geist Sans for modern, internet-native feel

### Color Palette
- **Light Mode**: Pure white background (#FFFFFF), absolute black text (#000000)
- **Dark Mode**: Pure black background (#000000), absolute white text (#FFFFFF)
- **Accent**: Subtle grays for hover states (20% lightness)

### Spacing System
- **XS**: 40px (mobile: 24px)
- **SM**: 80px (mobile: 48px)
- **MD**: 160px (mobile: 80px)
- **LG**: 240px (mobile: 120px)
- **XL**: 320px (mobile: 160px)

### Visual Characteristics
- **No rounded corners**: Stark rectangles only
- **No shadows**: Intentionally 2D, anti-depth
- **Exaggerated whitespace**: Massive vertical gaps for comedic effect
- **Minimal interactions**: Subtle hover effects, smooth transitions

## Page Architecture

### 1. Hero Landing Page (`/`)
- **Purpose**: The main attraction
- **Key Elements**:
  - Massive "6-7" headline centered with fade-in animation
  - Deadpan subheading: "If you know, you know."
  - Email capture form with button: "Join the 67"
  - Subtle link to About page
- **Design**: Pure minimalism with exaggerated spacing

### 2. Waitlist Confirmation (`/waitlist`)
- **Purpose**: Continuation of the joke
- **Key Elements**:
  - "67" headline (maintaining consistency)
  - Confirmation message: "Welcome to nothing."
  - Deadpan copy: "You get it now. Check your email (or don't)."
  - Navigation back to home and about pages
- **Design**: Same aesthetic as hero, maintains the bit

### 3. About Nothing Page (`/about`)
- **Purpose**: Intentionally vague explanations
- **Key Elements**:
  - "About 6-7" headline
  - Subheading: "An explanation that explains nothing."
  - Four sections with absurdist content:
    - What is 6-7?
    - Why 6-7?
    - Who is this for?
    - What happens next?
  - Navigation links
- **Design**: More content but maintains stark aesthetic

### 4. Custom 404 Page
- **Purpose**: Even errors stay in character
- **Key Elements**:
  - "404" in massive typography
  - Deadpan message: "This page doesn't exist. Neither does 6-7. But here we are."
  - Link back home
- **Design**: Consistent with the joke

## Interaction Design

### Hover Effects
- **Buttons**: Subtle upward shift (-1px), background color transition
- **Links**: Animated underline appears on hover
- **Inputs**: Subtle glow on focus

### Animations
- **Fade-in**: Elements fade in with slight upward movement (0.8s)
- **Typing effect**: Available for deadpan subheadings
- **Pulse**: Subtle pulsing for emphasis (optional)

### Mobile Adaptations
- **Typography**: Dramatic scaling (400px → 120px for headlines)
- **Spacing**: Proportional reduction while maintaining exaggeration
- **Forms**: Stack vertically on mobile
- **Touch targets**: Minimum 48px for accessibility

## Technical Implementation

### Global CSS (`globals.css`)
- CSS custom properties for colors and spacing
- Typography scale using clamp() for fluid scaling
- Mobile-first responsive design
- Accessibility features (focus states, reduced motion support)
- Theme support (light/dark mode)

### Component Structure
- Server-side rendering with Next.js App Router
- No client-side JavaScript required for core functionality
- Progressive enhancement approach
- SEO-friendly metadata

### Accessibility
- Proper semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Reduced motion support for users who prefer it
- High contrast mode compatibility
- Touch-friendly tap targets (48px minimum)

## Viral Mechanics

### Shareability
- Clean, memorable URL structure
- Social media optimized metadata
- Pre-populated share text: "I just joined 67" or "If you know you know"
- Minimal, easily screenshot-able design

### Email Collection
- Simple form with single email input
- No registration friction
- Deadpan confirmation messages
- Foundation for community building

### Brand Consistency
- Every page maintains the aesthetic
- Even error pages stay in character
- Navigation is subtle but present
- The joke never breaks

## Design Patterns

### The "Deadpan Digital Experience"
1. **Massive Scale**: Typography that's intentionally excessive
2. **Exaggerated Space**: Vertical rhythm that feels absurd
3. **Minimal Color**: Pure black and white, no gradients
4. **Self-Aware Copy**: Text that acknowledges the absurdity
5. **Perfect Execution**: The joke only works if the design is flawless

### Internet-Native Humor
- References meme culture without explaining it
- "If you know, you know" mentality
- Embraces the pointless while being genuinely well-designed
- Appeals to those who appreciate commitment to a bit

## Future Enhancements

### Potential Features
- A/B testing for "6-7" vs "67" headline
- Social sharing functionality
- Email integration with mock responses
- Analytics tracking (page views, email signups, scroll depth)
- Merchandise integration
- Community features for members

### Scalability
- CDN-ready static site
- Email service integration hooks
- Analytics platform connection points
- Social media API preparation for sharing

## Key Files

- `src/app/page.tsx` - Hero landing page
- `src/app/waitlist/page.tsx` - Confirmation page
- `src/app/about/page.tsx` - About page
- `src/app/not-found.tsx` - Custom 404
- `src/app/globals.css` - Complete design system
- `src/app/layout.tsx` - Root layout with metadata

## Metadata

- **Title**: "6-7 | If you know, you know"
- **Description**: "A viral meme-driven landing page that commits fully to the bit. Pure minimalism, absurd simplicity, internet-native humor."

## Philosophy Summary

This is a landing page that exists as both art and comedy. It takes a viral meme concept and executes it with professional design standards, creating something that feels simultaneously pointless and perfectly crafted. The humor comes from the commitment - every detail maintains the absurdist aesthetic while demonstrating genuine design skill.

**The ultimate goal**: Make people smile, share, and appreciate the perfect execution of an intentionally meaningless idea.
