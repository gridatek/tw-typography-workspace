# CSS Variables Typography System

A flexible, DRY typography system built with CSS variables and Tailwind CSS v4. Provides both standalone utilities for precise control and a prose wrapper for rich text blocks, all following the same design guidelines.

## ✨ Features

- **🎯 Single Source of Truth**: All typography values defined once using CSS variables
- **🔧 Standalone Utilities**: Precise control with `typography-*` classes
- **📝 Rich Text Support**: `prose` wrapper for markdown/CMS content
- **🌙 Dark Mode Ready**: Automatic dark mode with `prefers-color-scheme`
- **📱 Responsive**: Built-in responsive typography scaling
- **🎨 Themeable**: Easy customization via CSS variable overrides
- **⚡ Zero Dependencies**: Pure CSS with Tailwind CSS v4 integration
- **🚫 No @apply**: Clean implementation without Tailwind's `@apply` directive

## 🚀 Quick Start

### Installation

1. Copy the `typography.css` file to your project
2. Import it in your main CSS file:

```css
@import './typography.css';
```

### Basic Usage

#### Standalone Utilities (Full Control)

```html
<h1 class="typography-h1">Your Main Title</h1>
<h2 class="typography-h2">Section Heading</h2>
<p class="typography-p">Body paragraph with consistent spacing.</p>
<blockquote class="typography-blockquote">An inspirational quote</blockquote>
<code class="typography-code">inline code snippet</code>
```

#### Prose Wrapper (Rich Text Blocks)

```html
<article class="prose">
  <h1>Article Title</h1>
  <p>This paragraph automatically inherits proper typography styling.</p>
  <h2>Subsection</h2>
  <p>Content with <strong>bold text</strong> and <em>emphasis</em>.</p>
  <ul>
    <li>Automatic list styling</li>
    <li>Consistent with standalone utilities</li>
  </ul>
</article>
```

## 📚 Available Classes

### Standalone Typography Utilities

| Class                   | Purpose             | Example                |
| ----------------------- | ------------------- | ---------------------- |
| `typography-h1`         | Main headings       | Page titles            |
| `typography-h2`         | Section headings    | Major sections         |
| `typography-h3`         | Subsection headings | Minor sections         |
| `typography-h4`         | Small headings      | Card titles            |
| `typography-h5`         | Tiny headings       | Labels                 |
| `typography-h6`         | Micro headings      | Captions               |
| `typography-p`          | Body paragraphs     | Main content           |
| `typography-small`      | Small text          | Disclaimers, metadata  |
| `typography-blockquote` | Quote blocks        | Testimonials           |
| `typography-code`       | Inline code         | Variable names         |
| `typography-pre`        | Code blocks         | Code examples          |
| `typography-ul`         | Unordered lists     | Feature lists          |
| `typography-ol`         | Ordered lists       | Step-by-step guides    |
| `typography-li`         | List items          | Individual points      |
| `typography-strong`     | Bold text           | Important words        |
| `typography-em`         | Emphasized text     | Subtle emphasis        |
| `typography-link`       | Links               | Navigation, references |

### Prose Wrapper

The `prose` class automatically styles all child elements following the same guidelines as standalone utilities.

```html
<div class="prose">
  <!-- All HTML elements get automatic styling -->
  <h1>Styled automatically</h1>
  <p>No additional classes needed</p>
</div>
```

## 🎨 Customization

### Theme Overrides

Create custom themes by overriding CSS variables:

```css
/* Custom brand theme */
.theme-brand {
  --typography-color-heading: #7c3aed;
  --typography-color-body: #1f2937;
  --typography-size-h1: 3.5rem;
}

/* Large text theme */
.theme-large {
  --typography-size-body: 1.125rem;
  --typography-spacing-md: 1.5rem;
}

/* Usage */
<article class="prose theme-brand">
  <!-- Content uses brand colors -->
</article>
```

### Dark Mode Customization

Override dark mode variables:

```css
@media (prefers-color-scheme: dark) {
  .custom-dark {
    --typography-color-heading: #fbbf24;
    --typography-color-body: #f3f4f6;
  }
}
```

### Responsive Adjustments

Add custom breakpoints:

```css
@media (min-width: 1280px) {
  :root {
    --typography-size-h1: 4rem;
    --typography-spacing-xl: 4rem;
  }
}
```

## 🛠 CSS Variables Reference

### Colors

```css
--typography-color-heading: #111827; /* Headings */
--typography-color-body: #1f2937; /* Body text */
--typography-color-muted: #6b7280; /* Muted text */
--typography-color-border: #d1d5db; /* Borders */
--typography-color-code-bg: #f3f4f6; /* Code background */
--typography-color-code-text: #1f2937; /* Code text */
```

### Typography Scale

```css
--typography-size-h1: 2.25rem; /* 36px */
--typography-size-h2: 1.875rem; /* 30px */
--typography-size-h3: 1.5rem; /* 24px */
--typography-size-body: 1rem; /* 16px */
--typography-size-small: 0.875rem; /* 14px */
```

### Spacing

```css
--typography-spacing-xs: 0.5rem; /* 8px */
--typography-spacing-sm: 0.75rem; /* 12px */
--typography-spacing-md: 1rem; /* 16px */
--typography-spacing-lg: 1.5rem; /* 24px */
--typography-spacing-xl: 2rem; /* 32px */
```

### Font Properties

```css
--typography-weight-heading: 700; /* Bold headings */
--typography-weight-subheading: 600; /* Semibold subheadings */
--typography-weight-body: 400; /* Normal body */
--typography-leading-body: 1.625; /* Body line height */
```

## 🔧 Integration Examples

### With React Components

```jsx
function Article({ title, content }) {
  return (
    <article>
      <h1 className="typography-h1">{title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
```

### With Markdown

```html
<!-- Markdown output wrapped in prose -->
<div class="prose">
  <!-- Rendered markdown content -->
</div>
```

### With CMS Content

```html
<!-- Rich text from CMS -->
<div class="prose max-w-4xl mx-auto">{{{ cms_content }}}</div>
```

## 📱 Responsive Behavior

The system includes built-in responsive scaling:

- **Mobile**: Smaller heading sizes, optimized spacing
- **Tablet** (640px+): Medium heading sizes
- **Desktop** (1024px+): Large heading sizes, maximum impact

## 🌙 Dark Mode

Dark mode is automatically enabled via `prefers-color-scheme: dark`:

- Headings: Near white (#f9fafb)
- Body text: Light gray (#e5e7eb)
- Muted text: Medium gray (#9ca3af)
- Backgrounds: Adjusted for dark themes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚡ Performance

- **Zero Runtime Cost**: Pure CSS implementation
- **Small Bundle Size**: No JavaScript dependencies
- **Efficient Rendering**: Uses native CSS features
- **Optimized Loading**: Can be inlined or cached effectively

## 🙏 Acknowledgments

- Built for Tailwind CSS v4
- Inspired by modern typography systems
- Follows web accessibility guidelines

---

**Made with ❤️ for better web typography**
