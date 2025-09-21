# tw-typography-workspace

A modern CSS Variables Typography System designed for **Tailwind CSS v4** with fluid responsive design and seamless theme integration.

## 🚀 Features

- **Tailwind CSS v4 Compatible** - Uses `@theme` syntax and standard Tailwind variables
- **Fluid Typography** - Responsive text scaling with `clamp()` functions
- **Complete Text Scale** - Extends Tailwind's text sizes (xs to 9xl) with fluid behavior
- **Dark Mode Support** - Automatic theme switching via `prefers-color-scheme`
- **Modular Architecture** - Separate theme configuration and utility files
- **Zero Dependencies** - Pure CSS with Tailwind v4 variables

## 📁 Project Structure

```
tw-typography-workspace/
├── packages/tw-typography/          # Core typography package
│   ├── src/
│   │   ├── index.css               # Complete system (imports both files)
│   │   ├── theme.css               # @theme configuration only
│   │   └── typography.css          # Typography utilities only
│   └── build.js                    # Package build script
└── apps/demo/                      # Angular demo application
    └── src/                        # Demo showcasing the typography system
```

## 🎨 Typography System

### Theme Configuration (`theme.css`)

The theme uses Tailwind CSS v4's `@theme` syntax to define fluid typography scales:

```css
@theme {
  /* Fluid Text Sizes */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  /* ... up to --text-9xl */

  /* Calculated Line Heights */
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm--line-height: calc(1.25 / 0.875);
  /* ... corresponding line heights */

  /* Semantic Colors */
  --color-typography-heading: var(--color-gray-900);
  --color-typography-body: var(--color-gray-700);
  --color-typography-muted: var(--color-gray-500);
}
```

### Typography Utilities (`typography.css`)

Pre-built utilities for common typography patterns:

```css
@utility typography-h1 {
  font-size: var(--text-4xl);
  line-height: var(--text-4xl--line-height);
  font-weight: var(--font-weight-bold);
  color: var(--color-typography-heading);
  margin-bottom: calc(6 * var(--spacing));
  font-family: var(--font-sans);
}
```

## 📦 Installation & Usage

### Option 1: Complete System

```css
@import 'tw-typography/index.css';
```

### Option 2: Theme Only

```css
@import 'tw-typography/theme.css';
/* Use your own utilities */
```

### Option 3: Utilities Only

```css
@import 'tw-typography/typography.css';
/* Use your own theme configuration */
```

## 🎯 Available Utilities

### Individual Typography Classes

- `typography-h1` through `typography-h6` - Semantic heading styles
- `typography-p` - Paragraph styling
- `typography-small` - Small text
- `typography-blockquote` - Quote styling
- `typography-code` - Inline code
- `typography-pre` - Code blocks
- `typography-ul`, `typography-ol`, `typography-li` - List styling
- `typography-strong`, `typography-em` - Text emphasis
- `typography-link` - Link styling with hover states
- `dark` - Dark mode color scheme

### Prose Wrapper

```html
<div class="prose">
  <h1>This heading automatically gets typography-h1 styles</h1>
  <p>This paragraph gets typography-p styles</p>
  <code>Inline code gets typography-code styles</code>
</div>
```

## 🌙 Dark Mode

Dark mode is handled via the `dark` utility for manual control:

```css
@utility dark {
  /* tw-prose dark mode colors */
  --tw-prose-body: var(--color-gray-300);
  --tw-prose-headings: var(--color-gray-50);
  --tw-prose-lead: var(--color-gray-400);
  --tw-prose-links: var(--color-gray-100);
  /* ... and all other tw-prose dark colors */
}
```

### Usage

```html
<!-- Light mode (default) -->
<div class="prose">
  <h1>Light theme heading</h1>
  <p>Light theme content</p>
</div>

<!-- Dark mode -->
<div class="dark">
  <div class="prose">
    <h1>Dark theme heading</h1>
    <p>Dark theme content</p>
  </div>
</div>

<!-- Or apply dark to body/html for global dark mode -->
<body class="dark">
  <div class="prose">All typography uses dark theme</div>
</body>
```

## 🔧 Development

### Commands

```bash
# Install dependencies
npm run install:all

# Start demo application
npm run demo

# Build typography package
npm run build:package

# Build everything
npm run build
```

### Demo Application

The Angular demo app showcases all typography utilities and responsive behavior. Visit `apps/demo/` to see the system in action.

## 🎨 Customization

### Extending the Theme

Add your own typography variables to the `@theme` block:

```css
@theme {
  /* Your custom additions */
  --text-custom: clamp(1.5rem, 1.25rem + 1vw, 2rem);
  --text-custom--line-height: 1.4;
}
```

### Custom Utilities

Create your own utilities using the theme variables:

```css
@utility my-custom-text {
  font-size: var(--text-custom);
  line-height: var(--text-custom--line-height);
  color: var(--color-typography-heading);
}
```

## 📚 Technical Details

- **Fluid Scaling**: Uses `clamp(min, preferred, max)` for smooth responsive typography
- **Standard Variables**: Leverages Tailwind v4's built-in color and spacing systems
- **Calculated Line Heights**: Maintains proper typography ratios across all sizes
- **Semantic Colors**: Typography-specific color tokens that adapt to light/dark themes
- **Modular Design**: Import only what you need

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Test changes in the demo app
4. Submit a pull request

## 📄 License

MIT License - feel free to use in your projects!
