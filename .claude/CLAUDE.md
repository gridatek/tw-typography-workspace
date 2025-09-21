# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo workspace for a CSS Variables Typography System designed for Tailwind CSS v4. The project consists of:

- **Core Package** (`packages/tw-typography/`): A typography utility library that provides CSS variables and utility classes
- **Demo Application** (`apps/demo/`): An Angular application showcasing the typography system

## Architecture

### Monorepo Structure

- Uses npm workspaces for package management
- **apps/demo/**: Angular standalone application with Tailwind CSS v4
- **packages/tw-typography/**: Pure CSS package with utility classes and variables

### Typography System Design

The typography system is built around CSS variables for maximum flexibility:

- **CSS Variables**: Defined in `apps/demo/src/styles.css` with `@theme` block
- **Utility Classes**: Individual utilities (e.g., `typography-h1`, `typography-p`) for precise control
- **Prose Wrapper**: `.prose` class for automatic styling of rich text content
- **Responsive Design**: Breakpoint-specific typography scaling
- **Dark Mode**: Automatic color scheme switching via `prefers-color-scheme`

## Common Commands

### Development

```bash
# Install dependencies
npm run install:all

# Start demo application
npm run demo

# Development mode for all packages
npm run dev

# Build everything
npm run build
```

### Package-Specific Commands

```bash
# Build only the typography package
npm run build:package

# Build only the demo app
npm run build:demo

# Run tests (if available)
npm run test

# Lint all packages
npm run lint
```

### Maintenance

```bash
# Clean all build artifacts and node_modules
npm run clean

# Version bumping
npm run version:patch
npm run version:minor
npm run version:major
```

## Angular Best Practices

### Component Architecture

- Use standalone components (default behavior, don't set `standalone: true`)
- Prefer inline templates for demo components
- Use signals for state management with `signal()` and `computed()`
- Use `input()` and `output()` functions instead of decorators
- Set `changeDetection: ChangeDetectionStrategy.OnPush` where applicable

### Template Patterns

- Use native control flow (`@if`, `@for`, `@switch`) instead of structural directives
- Use class bindings instead of `ngClass`
- Use style bindings instead of `ngStyle`

### Services and Injection

- Use `inject()` function instead of constructor injection
- Use `providedIn: 'root'` for singleton services

## Typography System Usage

### CSS Variable Integration

All typography values are controlled via CSS variables defined in the `@theme` block:

```css
@theme {
  --typography-size-h1: 2.25rem;
  --typography-color-heading: #111827;
  /* etc. */
}
```

### Utility Classes

Two approaches for applying typography:

1. **Individual utilities**: `typography-h1`, `typography-p`, `typography-code`, etc.
2. **Prose wrapper**: Wrap content in `.prose` class for automatic styling

### Package Build Process

The typography package uses a custom Node.js build script (`build.js`) that:

- Copies CSS files to `dist/`
- Creates package metadata
- Handles file organization for distribution

## Important Notes

- Angular configuration sets `skipTests: true` for generated components
- The demo app imports the typography package locally via `file:../../packages/tw-typography`
- Prettier is configured with lint-staged for automatic formatting
- Husky is set up for git hooks
