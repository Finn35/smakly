# Smakly Logo System

A premium, geometric logo system for Smakly.

## Design Principles

### Icon Concept
- **Vertical capsule**: Represents the AI assistant/communication bubble
- **Dot (top)**: Incoming caller or message
- **Line (bottom)**: AI response
- **Together**: "Smakly answers calls/messages automatically"

### Geometry
- Perfect mathematical shapes
- Capsule: `rx="8"` rounded rectangle (50% of width)
- Dot: Perfect circle
- Line: Rounded rectangle with `rx="1"`
- Consistent 2px stroke weight (1.75px at small sizes)

### Colors
- **Default**: `#111827` (gray-900)
- **Mono**: `#0F172A` (slate-900)
- **Gradient**: `#3B82F6` → `#8B5CF6` (blue to violet)
- **White**: `#FFFFFF` (for dark backgrounds)

## Files

### Icons (32x32)
- `SmaklyIcon.svg` - Default dark
- `SmaklyIconMono.svg` - Dark navy
- `SmaklyIconGradient.svg` - Blue-violet gradient
- `SmaklyIconWhite.svg` - White (for dark BGs)

### Horizontal Logos (140x40)
- `SmaklyLogoHorizontal.svg` - Default
- `SmaklyLogoHorizontalMono.svg` - Dark navy
- `SmaklyLogoHorizontalGradient.svg` - Gradient

### Stacked Logos (64x72)
- `SmaklyLogoStacked.svg` - Default
- `SmaklyLogoStackedMono.svg` - Dark navy
- `SmaklyLogoStackedGradient.svg` - Gradient

### Wordmark
- `SmaklyWordmark.svg` - Text only

### Favicon
- `favicon.svg` (in /public) - Gradient background with white icon

## React Component

```tsx
import SmaklyLogo from '@/components/logo';

// Variants
<SmaklyLogo variant="horizontal" />  // Default
<SmaklyLogo variant="icon" />        // Icon only
<SmaklyLogo variant="stacked" />     // Stacked layout
<SmaklyLogo variant="wordmark" />    // Text only

// Colors
<SmaklyLogo color="default" />   // Gray-900
<SmaklyLogo color="mono" />      // Slate-900
<SmaklyLogo color="gradient" />  // Blue-violet
<SmaklyLogo color="white" />     // White

// Sizes
<SmaklyLogo size="sm" />  // 24px icon
<SmaklyLogo size="md" />  // 32px icon (default)
<SmaklyLogo size="lg" />  // 40px icon
<SmaklyLogo size="xl" />  // 48px icon
```

## Usage Guidelines

### Header/Navigation
Use `variant="horizontal"` with `color="default"` for most headers.

### Footer
Use `size="sm"` for compact footer placement.

### Dark Backgrounds
Use `color="white"` or `color="gradient"` on dark backgrounds.

### App Icons / Favicons
Use the gradient version with white icon for brand recognition.

### Minimum Sizes
- Icon only: 16px minimum
- With wordmark: 24px icon minimum
- Print: 12mm minimum width

## Brand Typography

Wordmark uses:
- Font: System UI / Inter / Manrope (semibold)
- Case: lowercase "smakly"
- Letter-spacing: -0.02em (tight)
- Weight: 600 (semibold)


