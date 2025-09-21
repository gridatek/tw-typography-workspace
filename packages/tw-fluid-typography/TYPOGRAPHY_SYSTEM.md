# tw-typography: Fluid Responsive Typography System

A modern CSS Variables Typography System designed for Tailwind CSS v4 that provides smooth, responsive typography scaling using CSS `clamp()` functions.

## 🎯 Overview

This typography system eliminates the need for complex media queries by using fluid scaling that adapts smoothly across all screen sizes. Typography scales naturally from mobile to desktop, ensuring optimal readability at every viewport width.

## 🏗️ Architecture

### Core Principles

1. **CSS Variables Foundation**: All typography values are controlled via CSS custom properties
2. **Fluid Scaling**: Uses `clamp()` functions for smooth responsive behavior
3. **Mathematical Type Scale**: Consistent hierarchy based on modular scale ratios
4. **Two Usage Patterns**: Individual utilities and prose wrapper for different use cases
5. **Tailwind Integration**: Works seamlessly with Tailwind CSS v4's `@utility` directive

### System Components

```
📦 tw-typography/
├── 🎨 CSS Variables (Design Tokens)
├── 🔧 Individual Utilities (@utility typography-h1, etc.)
├── 📝 Prose Wrapper (@utility prose)
├── 🌙 Dark Mode Support
└── 📱 Fluid Responsive Scaling
```

## 📐 Typography Scale

### Size Hierarchy

The system uses a mathematical type scale with fluid responsive behavior:

| Element   | Min Size        | Max Size        | Viewport Scaling | Usage                      |
| --------- | --------------- | --------------- | ---------------- | -------------------------- |
| **H1**    | 36px (2.25rem)  | 56px (3.5rem)   | 2.5vw            | Page titles, hero headings |
| **H2**    | 30px (1.875rem) | 44px (2.75rem)  | 2vw              | Section headings           |
| **H3**    | 24px (1.5rem)   | 34px (2.125rem) | 1.25vw           | Subsection headings        |
| **H4**    | 20px (1.25rem)  | 28px (1.75rem)  | 1vw              | Article headings           |
| **H5**    | 18px (1.125rem) | 24px (1.5rem)   | 0.75vw           | Small headings             |
| **H6**    | 16px (1rem)     | 20px (1.25rem)  | 0.5vw            | Minor headings             |
| **Body**  | 16px (1rem)     | 18px (1.125rem) | 0.5vw            | Paragraph text             |
| **Small** | 14px (0.875rem) | 16px (1rem)     | 0.375vw          | Captions, metadata         |

### Line Height System

Line heights scale proportionally with font sizes for optimal readability:

```css
/* Fluid line heights adapt to font size changes */
--typography-leading-h1: clamp(2.5rem, 2.25rem + 2.5vw, 3.75rem);
--typography-leading-h2: clamp(2.25rem, 2rem + 2vw, 3rem);
--typography-leading-body: 1.6; /* Fixed ratio for body text */
```

### Spacing Scale

Margins and padding scale with screen size to maintain visual hierarchy:

```css
--typography-spacing-xs: clamp(0.5rem, 0.45rem + 0.25vw, 0.625rem); /* 8px → 10px */
--typography-spacing-sm: clamp(0.75rem, 0.675rem + 0.375vw, 0.9375rem); /* 12px → 15px */
--typography-spacing-md: clamp(1rem, 0.9rem + 0.5vw, 1.25rem); /* 16px → 20px */
--typography-spacing-lg: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem); /* 24px → 30px */
--typography-spacing-xl: clamp(2rem, 1.8rem + 1vw, 2.5rem); /* 32px → 40px */
--typography-spacing-2xl: clamp(2.5rem, 2.25rem + 1.25vw, 3.125rem); /* 40px → 50px */
```

## 🎨 CSS Variables System

### Typography Tokens

All typography properties are controlled via CSS custom properties:

```css
:root {
  /* === FLUID TYPOGRAPHY SCALE === */
  --typography-size-h1: clamp(2.25rem, 2rem + 2.5vw, 3.5rem);
  --typography-size-h2: clamp(1.875rem, 1.625rem + 2vw, 2.75rem);
  --typography-size-h3: clamp(1.5rem, 1.375rem + 1.25vw, 2.125rem);
  --typography-size-h4: clamp(1.25rem, 1.125rem + 1vw, 1.75rem);
  --typography-size-h5: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --typography-size-h6: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --typography-size-body: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --typography-size-small: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);

  /* === FLUID LINE HEIGHTS === */
  --typography-leading-h1: clamp(2.5rem, 2.25rem + 2.5vw, 3.75rem);
  --typography-leading-h2: clamp(2.25rem, 2rem + 2vw, 3rem);
  --typography-leading-h3: clamp(2rem, 1.75rem + 1.25vw, 2.5rem);
  --typography-leading-h4: clamp(1.75rem, 1.5rem + 1vw, 2.125rem);
  --typography-leading-h5: clamp(1.75rem, 1.5rem + 0.75vw, 2rem);
  --typography-leading-h6: clamp(1.5rem, 1.25rem + 0.5vw, 1.75rem);
  --typography-leading-body: 1.6;
  --typography-leading-tight: 1.3;

  /* === FLUID SPACING === */
  --typography-spacing-xs: clamp(0.5rem, 0.45rem + 0.25vw, 0.625rem);
  --typography-spacing-sm: clamp(0.75rem, 0.675rem + 0.375vw, 0.9375rem);
  --typography-spacing-md: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --typography-spacing-lg: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);
  --typography-spacing-xl: clamp(2rem, 1.8rem + 1vw, 2.5rem);
  --typography-spacing-2xl: clamp(2.5rem, 2.25rem + 1.25vw, 3.125rem);

  /* === FONT WEIGHTS === */
  --typography-weight-heading: 700;
  --typography-weight-subheading: 600;
  --typography-weight-body: 400;
  --typography-weight-bold: 600;

  /* === COLOR TOKENS === */
  --typography-color-heading: #111827;
  --typography-color-body: #1f2937;
  --typography-color-muted: #6b7280;
  --typography-color-border: #d1d5db;
  --typography-color-code-bg: #f3f4f6;
  --typography-color-code-text: #1f2937;

  /* === FONT FAMILIES === */
  --typography-font-sans: ui-sans-serif, system-ui, sans-serif;
  --typography-font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, monospace;
}
```

### Dark Mode Support

Colors automatically adapt to user's preferred color scheme:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --typography-color-heading: #f9fafb;
    --typography-color-body: #e5e7eb;
    --typography-color-muted: #9ca3af;
    --typography-color-border: #4b5563;
    --typography-color-code-bg: #374151;
    --typography-color-code-text: #e5e7eb;
  }
}
```

## 🔧 Usage Patterns

### Pattern 1: Individual Utilities

Use specific typography utilities for precise control:

```html
<!-- Headings -->
<h1 class="typography-h1">Main Page Title</h1>
<h2 class="typography-h2">Section Heading</h2>
<h3 class="typography-h3">Subsection Title</h3>

<!-- Body Text -->
<p class="typography-p">Regular paragraph text with optimal line height and spacing.</p>
<small class="typography-small">Metadata or caption text.</small>

<!-- Special Elements -->
<blockquote class="typography-blockquote">
  "A thoughtful quote with proper styling and spacing."
</blockquote>

<code class="typography-code">inline code snippet</code>

<pre class="typography-pre">
// Code block with syntax highlighting
const example = 'formatted code';
</pre>

<!-- Interactive Elements -->
<a href="#" class="typography-link">Link with hover effects</a>

<!-- Lists -->
<ul class="typography-ul">
  <li class="typography-li">First list item</li>
  <li class="typography-li">Second list item</li>
</ul>
```

### Pattern 2: Prose Wrapper

Use the prose utility for automatic styling of rich text content:

```html
<article class="prose">
  <h1>Article Title</h1>
  <p class="lead">Lead paragraph with enhanced styling for article introductions.</p>

  <h2>Section Heading</h2>
  <p>Regular paragraph content flows naturally with proper spacing and hierarchy.</p>

  <h3>Subsection</h3>
  <p>Another paragraph with <strong>bold text</strong> and <em>italic emphasis</em>.</p>

  <blockquote>
    <p>Blockquotes are automatically styled with proper indentation and visual treatment.</p>
  </blockquote>

  <ul>
    <li>Unordered list items</li>
    <li>Automatically formatted</li>
    <li>With proper spacing</li>
  </ul>

  <ol>
    <li>Ordered lists work too</li>
    <li>With consistent styling</li>
  </ol>

  <p>Links like <a href="#">this example</a> include hover states and proper contrast.</p>

  <pre><code>// Code blocks are styled appropriately
function example() {
  return 'syntax highlighting ready';
}</code></pre>
</article>
```

## 🎛️ Customization

### Overriding CSS Variables

Customize the typography system by overriding CSS variables:

```css
/* Custom brand typography */
:root {
  /* Adjust the type scale */
  --typography-size-h1: clamp(2rem, 1.8rem + 3vw, 4rem);

  /* Change colors */
  --typography-color-heading: #1e40af;
  --typography-color-body: #1f2937;

  /* Modify spacing */
  --typography-spacing-lg: clamp(2rem, 1.8rem + 1vw, 3rem);

  /* Update font families */
  --typography-font-sans: 'Inter', system-ui, sans-serif;
}
```

### Creating Custom Utilities

Extend the system with your own utilities:

```css
@utility typography-caption {
  font-size: var(--typography-size-small);
  color: var(--typography-color-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--typography-spacing-xs);
}

@utility typography-lead {
  font-size: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
  line-height: 1.6;
  color: var(--typography-color-body);
  font-weight: 400;
  margin-bottom: var(--typography-spacing-lg);
}
```

## 📱 Responsive Behavior

### How Fluid Scaling Works

The `clamp()` function creates smooth scaling between defined minimum and maximum values:

```css
font-size: clamp(min-size, preferred-size + viewport-scaling, max-size);
```

**Example breakdown:**

```css
--typography-size-h1: clamp(2.25rem, 2rem + 2.5vw, 3.5rem);
/*                           ↓         ↓            ↓
                         36px min   scales with    56px max
                                   viewport width
*/
```

### Viewport Scaling Calculation

At different screen widths:

- **320px (mobile)**: Uses minimum size (36px)
- **768px (tablet)**: ~45px (2rem + 2.5% of 768px = 2rem + 19.2px)
- **1440px (desktop)**: Uses maximum size (56px)
- **2560px+ (large screens)**: Capped at maximum size (56px)

### Breakpoint-Free Design

No media queries needed! Typography scales continuously:

```css
/* ❌ Old approach with breakpoints */
@media (min-width: 640px) {
  .heading {
    font-size: 2rem;
  }
}
@media (min-width: 1024px) {
  .heading {
    font-size: 2.5rem;
  }
}

/* ✅ New fluid approach */
.typography-h2 {
  font-size: clamp(1.875rem, 1.625rem + 2vw, 2.75rem);
}
```

## 🎨 Integration with Tailwind CSS

### Using with Tailwind Utilities

Combine typography utilities with Tailwind classes:

```html
<!-- Typography + Layout -->
<div class="typography-h1 text-center mb-8">Centered heading with Tailwind spacing</div>

<!-- Typography + Responsive Design -->
<article class="prose mx-auto max-w-4xl px-6">
  <!-- Prose handles typography, Tailwind handles layout -->
</article>

<!-- Typography + Colors -->
<p class="typography-p text-blue-600 dark:text-blue-400">
  Custom colored text with typography scaling
</p>
```

### Custom Design System

Build a complete design system:

```css
/* Brand-specific utilities */
@utility brand-headline {
  font-size: var(--typography-size-h1);
  font-weight: var(--typography-weight-heading);
  color: var(--brand-primary);
  line-height: var(--typography-leading-h1);
  margin-bottom: var(--typography-spacing-lg);
}

@utility brand-body {
  font-size: var(--typography-size-body);
  line-height: var(--typography-leading-body);
  color: var(--brand-text);
  margin-bottom: var(--typography-spacing-md);
}
```

## 🛠️ Development Workflow

### Installation

```bash
npm install tw-typography
```

### Import in CSS

```css
@import 'tailwindcss';
@import 'tw-typography/src/typography.css';
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // tw-typography provides the utilities
      // No additional configuration needed
    },
  },
  plugins: [],
};
```

## ✅ Best Practices

### Do's

- **✅ Use semantic HTML**: Proper heading hierarchy improves accessibility
- **✅ Test across devices**: Verify scaling works on real devices
- **✅ Maintain contrast**: Ensure sufficient color contrast in all modes
- **✅ Consider reading distance**: Mobile screens are typically held closer
- **✅ Optimize line length**: Aim for 45-75 characters per line

### Don'ts

- **❌ Don't override with fixed sizes**: Avoid `font-size: 24px !important`
- **❌ Don't skip heading levels**: Use h1→h2→h3 in order
- **❌ Don't ignore accessibility**: Test with screen readers
- **❌ Don't over-scale**: Extreme scaling can hurt readability
- **❌ Don't forget testing**: Always test with real content

## 🔍 Browser Support

- **CSS `clamp()`**: Chrome 79+, Firefox 75+, Safari 13.1+
- **CSS Custom Properties**: All modern browsers, IE 11 with fallbacks
- **Viewport Units**: Universal support

### Fallback Strategy

For older browsers, consider using PostCSS:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-clamp': {}, // Converts clamp() to media queries
    'postcss-custom-properties': {}, // IE 11 fallbacks
  },
};
```

## 🚀 Performance

### CSS Size Impact

- **Minified size**: ~4KB
- **Gzipped size**: ~1.2KB
- **Runtime overhead**: Minimal - calculations happen during layout

### Optimization Tips

- **Tree shaking**: Import only needed utilities
- **CSS Custom Properties**: Efficient variable updates
- **No JavaScript**: Pure CSS solution

## 📊 Comparison

| Feature                  | tw-typography      | Traditional Approach | Other Libraries    |
| ------------------------ | ------------------ | -------------------- | ------------------ |
| **Fluid Scaling**        | ✅ CSS clamp()     | ❌ Fixed breakpoints | ⚠️ Limited         |
| **CSS Variables**        | ✅ Full system     | ❌ Hardcoded values  | ⚠️ Partial         |
| **Dark Mode**            | ✅ Automatic       | ❌ Manual setup      | ⚠️ Plugin required |
| **Tailwind Integration** | ✅ Native @utility | ❌ Custom CSS        | ⚠️ Complex setup   |
| **Bundle Size**          | ✅ 1.2KB gzipped   | ⚠️ Varies            | ❌ 10-50KB         |
| **Browser Support**      | ✅ Modern browsers | ✅ Universal         | ⚠️ Varies          |

---

This typography system provides a modern, maintainable, and highly flexible foundation for responsive typography that scales beautifully across all device sizes without the complexity of traditional media query approaches.
