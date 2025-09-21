# @utility Guide for Tailwind CSS v4

This guide demonstrates how to create custom utilities using the `@utility` directive in Tailwind CSS v4, based on real examples from the tw-typography package.

## Basic @utility Syntax

### Simple Utility

```css
@utility my-button {
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border-radius: 0.25rem;
}
```

Usage in HTML:

```html
<button class="my-button">Click me</button>
```

## Adding Hover States with @variant

### Single Hover State

```css
@utility my-link {
  color: #2563eb;
  text-decoration: underline;
  transition: all 0.2s ease;

  @variant hover {
    color: #1d4ed8;
    text-decoration-color: #2563eb;
  }
}
```

Usage in HTML:

```html
<a href="#" class="my-link">Hover over me</a>
```

### Multiple Variants

```css
@utility my-card {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;

  @variant hover {
    background: #f3f4f6;
  }

  @variant focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }

  @variant dark {
    background: #1f2937;
    color: white;

    @variant hover {
      background: #374151;
    }
  }
}
```

## Nested Selectors with &

### Basic Nesting

```css
@utility dropdown {
  position: relative;
  display: inline-block;

  & .dropdown-content {
    display: none;
    position: absolute;
    background: white;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  @variant hover {
    & .dropdown-content {
      display: block;
    }
  }
}
```

### Complex Nested Structure (Prose Example)

```css
@utility prose {
  font-size: 1rem;
  line-height: 1.625;
  color: #1f2937;
  max-width: 65ch;

  & h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  & h2 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  & p {
    margin-bottom: 1rem;
  }

  & a {
    color: #2563eb;
    text-decoration: underline;

    @variant hover {
      color: #1d4ed8;
    }
  }

  & code {
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-family: monospace;
  }
}
```

## Using CSS Variables

### Variable-Based Utilities

```css
@utility themed-button {
  background-color: var(--button-bg, #3b82f6);
  color: var(--button-text, white);
  padding: var(--button-padding, 0.5rem 1rem);
  border-radius: var(--button-radius, 0.375rem);
  font-weight: var(--button-weight, 500);

  @variant hover {
    background-color: var(--button-bg-hover, #2563eb);
  }
}
```

Define variables in your CSS:

```css
:root {
  --button-bg: #10b981;
  --button-bg-hover: #059669;
  --button-text: white;
  --button-padding: 0.75rem 1.5rem;
  --button-radius: 0.5rem;
  --button-weight: 600;
}
```

## Advanced Examples from tw-typography

### Typography Heading Utility

```css
@utility typography-h1 {
  font-size: var(--typography-size-h1);
  line-height: var(--typography-leading-h1);
  font-weight: var(--typography-weight-heading);
  color: var(--typography-color-heading);
  margin-bottom: var(--typography-spacing-lg);
  font-family: var(--typography-font-sans);
}
```

### Code Block Utility

```css
@utility typography-pre {
  font-size: var(--typography-size-small);
  font-family: var(--typography-font-mono);
  background-color: var(--typography-color-code-bg);
  color: var(--typography-color-code-text);
  padding: var(--typography-spacing-md);
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: var(--typography-spacing-lg) 0;
  line-height: 1.5;
}
```

### Interactive Link Utility

```css
@utility typography-link {
  color: #2563eb;
  text-decoration: underline;
  text-decoration-color: #93c5fd;
  text-underline-offset: 2px;
  transition: all 0.2s ease;

  @variant hover {
    color: #1d4ed8;
    text-decoration-color: #2563eb;
  }
}
```

## Best Practices

### 1. Naming Conventions

- Use descriptive, kebab-case names
- Prefix related utilities (e.g., `typography-h1`, `typography-p`)
- Avoid conflicts with existing Tailwind classes

### 2. CSS Variables for Flexibility

```css
@utility custom-card {
  /* Use variables with fallbacks */
  background: var(--card-bg, white);
  border: var(--card-border, 1px solid #e5e7eb);
  border-radius: var(--card-radius, 0.5rem);
  padding: var(--card-padding, 1rem);
}
```

### 3. Responsive Design

Combine with media queries outside the utility:

```css
@utility responsive-text {
  font-size: var(--text-size, 1rem);
  line-height: var(--text-leading, 1.5);
}

@media (min-width: 640px) {
  :root {
    --text-size: 1.125rem;
    --text-leading: 1.625;
  }
}
```

### 4. Dark Mode Support

```css
@utility theme-card {
  background: var(--card-bg);
  color: var(--card-text);
  border: 1px solid var(--card-border);
}

/* Light mode (default) */
:root {
  --card-bg: white;
  --card-text: #1f2937;
  --card-border: #e5e7eb;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --card-bg: #1f2937;
    --card-text: #f9fafb;
    --card-border: #4b5563;
  }
}
```

## Common Patterns

### 1. Component-Style Utility

```css
@utility alert {
  padding: 1rem;
  border-radius: 0.375rem;
  border-left: 4px solid;

  & .alert-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  & .alert-message {
    font-size: 0.875rem;
  }
}
```

### 2. Layout Utility

```css
@utility sidebar-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  min-height: 100vh;

  & .sidebar {
    background: #f8fafc;
    padding: 1rem;
  }

  & .main-content {
    padding: 2rem;
  }
}
```

### 3. Animation Utility

```css
@utility fade-in {
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  @variant hover {
    animation-duration: 0.15s;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

## Integration with Tailwind

### Using with Existing Classes

```html
<!-- Combine custom utilities with Tailwind classes -->
<div class="typography-h1 text-center mb-8">Custom heading with Tailwind spacing</div>

<article class="prose mx-auto max-w-4xl">
  <!-- Prose utility handles typography, Tailwind handles layout -->
</article>
```

### Building Custom Design Systems

```css
/* Brand utilities */
@utility brand-primary {
  background: var(--brand-primary);
  color: var(--brand-on-primary);
}

@utility brand-surface {
  background: var(--brand-surface);
  color: var(--brand-on-surface);
  border: 1px solid var(--brand-outline);
}

/* Define brand tokens */
:root {
  --brand-primary: #6366f1;
  --brand-on-primary: white;
  --brand-surface: #f8fafc;
  --brand-on-surface: #1e293b;
  --brand-outline: #e2e8f0;
}
```

## Debugging Tips

1. **Invalid Utility Names**: Must be alphanumeric and start with lowercase

   ```css
   /* ❌ Invalid */
   @utility My-Button {
   }
   @utility 123-button {
   }
   @utility button:hover {
   }

   /* ✅ Valid */
   @utility my-button {
   }
   @utility button-123 {
   }
   @utility my-button {
     @variant hover {
     }
   }
   ```

2. **Testing Utilities**: Use browser dev tools to inspect generated CSS
3. **Variable Fallbacks**: Always provide fallback values for CSS variables
4. **Nesting Limits**: Keep nesting reasonable for maintainability

This guide should help you create powerful, maintainable custom utilities in Tailwind CSS v4!
