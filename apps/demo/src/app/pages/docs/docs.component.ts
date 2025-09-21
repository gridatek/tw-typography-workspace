import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Documentation Header -->
      <header class="mb-12">
        <h1 class="typography-h1 mb-6">Documentation</h1>
        <p class="lead text-gray-600 dark:text-gray-400 max-w-3xl">
          Complete guide to implementing and customizing the tw-typography
          responsive typography system in your projects.
        </p>
      </header>

      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-1">
          <nav class="sticky top-8 space-y-4">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 class="typography-h6 mb-3">Quick Navigation</h3>
              <ul class="space-y-2 typography-small">
                <li><a href="#installation" class="typography-link">Installation</a></li>
                <li><a href="#utilities" class="typography-link">Typography Utilities</a></li>
                <li><a href="#prose" class="typography-link">Prose Wrapper</a></li>
                <li><a href="#customization" class="typography-link">Customization</a></li>
                <li><a href="#examples" class="typography-link">Usage Examples</a></li>
                <li><a href="#api" class="typography-link">API Reference</a></li>
              </ul>
            </div>

            <div class="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 class="typography-small font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Pro Tip</h4>
              <p class="typography-small text-blue-700 dark:text-blue-300">
                Use browser DevTools to inspect the generated CSS and see how clamp() functions work.
              </p>
            </div>
          </nav>
        </aside>

        <!-- Main Documentation Content -->
        <main class="lg:col-span-3">
          <div class="prose">
            <!-- Installation -->
            <section id="installation">
              <h2>Installation</h2>

              <p>
                Install tw-typography via npm and integrate it with your existing
                Tailwind CSS setup:
              </p>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <p class="typography-small text-gray-600 dark:text-gray-400 mb-2">Install the package:</p>
                <p class="typography-code">npm install tw-typography</p>
              </div>

              <h3>Import in your CSS</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <p class="typography-small text-gray-600 dark:text-gray-400 mb-2">Add to your main CSS file:</p>
                <div class="typography-small font-mono">
                  <p>@import 'tailwindcss';</p>
                  <p>@import 'tw-typography/src/typography.css';</p>
                </div>
              </div>

              <p>
                The typography system will automatically integrate with Tailwind CSS v4's
                utility directive system.
              </p>
            </section>

            <!-- Typography Utilities -->
            <section id="utilities">
              <h2>Typography Utilities</h2>

              <p>
                Individual typography utilities give you precise control over
                text styling. Each utility includes fluid responsive scaling
                using CSS clamp() functions.
              </p>

              <h3>Heading Utilities</h3>

              <div class="not-prose bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
                <div class="space-y-4">
                  <div>
                    <h1 class="typography-h1">Heading Level 1</h1>
                    <code class="typography-code">typography-h1</code>
                    <p class="typography-small text-gray-600 dark:text-gray-400 mt-1">
                      36px → 56px • Page titles, hero headings
                    </p>
                  </div>

                  <div>
                    <h2 class="typography-h2">Heading Level 2</h2>
                    <code class="typography-code">typography-h2</code>
                    <p class="typography-small text-gray-600 dark:text-gray-400 mt-1">
                      30px → 44px • Section headings
                    </p>
                  </div>

                  <div>
                    <h3 class="typography-h3">Heading Level 3</h3>
                    <code class="typography-code">typography-h3</code>
                    <p class="typography-small text-gray-600 dark:text-gray-400 mt-1">
                      24px → 34px • Subsection titles
                    </p>
                  </div>
                </div>
              </div>

              <h3>Body Text Utilities</h3>

              <div class="not-prose bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
                <div class="space-y-4">
                  <div>
                    <p class="typography-p">Regular paragraph text with optimal line height and spacing for comfortable reading.</p>
                    <code class="typography-code">typography-p</code>
                    <p class="typography-small text-gray-600 dark:text-gray-400 mt-1">
                      16px → 18px • Body text, paragraphs
                    </p>
                  </div>

                  <div>
                    <small class="typography-small">Small text for captions, metadata, and fine print</small><br>
                    <code class="typography-code">typography-small</code>
                    <p class="typography-small text-gray-600 dark:text-gray-400 mt-1">
                      14px → 16px • Captions, metadata
                    </p>
                  </div>
                </div>
              </div>

              <h3>Special Elements</h3>

              <div class="not-prose bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
                <div class="space-y-6">
                  <div>
                    <blockquote class="typography-blockquote">
                      "Blockquotes are styled with proper indentation and visual hierarchy."
                    </blockquote>
                    <code class="typography-code">typography-blockquote</code>
                  </div>

                  <div>
                    <p class="typography-p">
                      Inline code like <code class="typography-code">const example = 'styled';</code>
                      automatically gets background and padding.
                    </p>
                    <code class="typography-code">typography-code</code>
                  </div>

                  <div>
                    <div class="typography-pre bg-gray-900 text-green-400 p-4 rounded">
                      // Code blocks with syntax highlighting support<br>
                      function fluidTypography() <br>
                      &nbsp;&nbsp;return 'Beautiful scaling across devices';<br>
                    </div>
                    <code class="typography-code">typography-pre</code>
                  </div>

                  <div>
                    <ul class="typography-ul">
                      <li class="typography-li">Unordered list item one</li>
                      <li class="typography-li">Unordered list item two</li>
                    </ul>
                    <code class="typography-code">typography-ul + typography-li</code>
                  </div>
                </div>
              </div>
            </section>

            <!-- Prose Wrapper -->
            <section id="prose">
              <h2>Prose Wrapper</h2>

              <p>
                The <code>prose</code> utility automatically styles all nested
                HTML elements, perfect for blog posts, articles, and rich content
                where you want consistent styling without applying individual classes.
              </p>

              <h3>Basic Usage</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  &lt;article class="prose"&gt;<br>
                  &nbsp;&nbsp;&lt;h1&gt;Article Title&lt;/h1&gt;<br>
                  &nbsp;&nbsp;&lt;p&gt;Paragraph text is automatically styled.&lt;/p&gt;<br>
                  &nbsp;&nbsp;&lt;h2&gt;Section Heading&lt;/h2&gt;<br>
                  &lt;/article&gt;
                </div>
              </div>

              <h3>Example Output</h3>

              <div class="not-prose bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 my-6">
                <div class="prose">
                  <h3>Sample Article Content</h3>
                  <p>
                    This paragraph demonstrates how the prose wrapper automatically
                    applies consistent typography styles to all nested elements
                    without requiring individual utility classes.
                  </p>
                  <blockquote>
                    <p>
                      "The prose utility makes content styling effortless while
                      maintaining beautiful typography hierarchy."
                    </p>
                  </blockquote>
                  <ul>
                    <li>List items are automatically styled</li>
                    <li>With proper spacing and typography</li>
                    <li>No additional classes needed</li>
                  </ul>
                  <p>
                    Links like <a href="#">this example</a> include hover states,
                    and <code>inline code</code> gets proper styling too.
                  </p>
                </div>
              </div>
            </section>

            <!-- Customization -->
            <section id="customization">
              <h2>Customization</h2>

              <p>
                Customize the typography system by overriding CSS custom properties
                to match your brand and design requirements.
              </p>

              <h3>Override CSS Variables</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  :root {<br>
                  &nbsp;&nbsp;/* Customize colors */<br>
                  &nbsp;&nbsp;--typography-color-heading: #1e40af;<br>
                  &nbsp;&nbsp;--typography-color-body: #1f2937;<br>
                  <br>
                  &nbsp;&nbsp;/* Adjust type scale */<br>
                  &nbsp;&nbsp;--typography-size-h1: clamp(2rem, 1.8rem + 3vw, 4rem);<br>
                  <br>
                  &nbsp;&nbsp;/* Change font families */<br>
                  &nbsp;&nbsp;--typography-font-sans: 'Inter', system-ui, sans-serif;<br>
                  }
                </div>
              </div>

              <h3>Creating Custom Utilities</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  @utility typography-caption {<br>
                  &nbsp;&nbsp;font-size: var(--typography-size-small);<br>
                  &nbsp;&nbsp;color: var(--typography-color-muted);<br>
                  &nbsp;&nbsp;font-weight: 500;<br>
                  &nbsp;&nbsp;text-transform: uppercase;<br>
                  }
                </div>
              </div>
            </section>

            <!-- Usage Examples -->
            <section id="examples">
              <h2>Usage Examples</h2>

              <h3>With Tailwind CSS Utilities</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  &lt;!-- Combine typography with Tailwind layout --&gt;<br>
                  &lt;div class="typography-h1 text-center mb-8"&gt;<br>
                  &nbsp;&nbsp;Centered heading with spacing<br>
                  &lt;/div&gt;<br>
                  <br>
                  &lt;!-- Typography with responsive design --&gt;<br>
                  &lt;article class="prose mx-auto max-w-4xl px-6"&gt;<br>
                  &nbsp;&nbsp;&lt;!-- Content automatically styled --&gt;<br>
                  &lt;/article&gt;
                </div>
              </div>

              <h3>Component Integration</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  // React component example<br>
                  function Article(props) {<br>
                  &nbsp;&nbsp;return (<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;article className="prose mx-auto"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{props.title}&lt;/h1&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div dangerouslySetInnerHTML={props.content} /&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/article&gt;<br>
                  &nbsp;&nbsp;);<br>
                  }
                </div>
              </div>
            </section>

            <!-- API Reference -->
            <section id="api">
              <h2>API Reference</h2>

              <h3>Typography Utilities</h3>

              <div class="not-prose overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 my-6">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th class="px-6 py-3 text-left typography-small font-semibold text-gray-900 dark:text-gray-100">
                        Class
                      </th>
                      <th class="px-6 py-3 text-left typography-small font-semibold text-gray-900 dark:text-gray-100">
                        Min Size
                      </th>
                      <th class="px-6 py-3 text-left typography-small font-semibold text-gray-900 dark:text-gray-100">
                        Max Size
                      </th>
                      <th class="px-6 py-3 text-left typography-small font-semibold text-gray-900 dark:text-gray-100">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h1</code></td>
                      <td class="px-6 py-4 typography-small">36px</td>
                      <td class="px-6 py-4 typography-small">56px</td>
                      <td class="px-6 py-4 typography-small">Page titles, hero headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h2</code></td>
                      <td class="px-6 py-4 typography-small">30px</td>
                      <td class="px-6 py-4 typography-small">44px</td>
                      <td class="px-6 py-4 typography-small">Section headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h3</code></td>
                      <td class="px-6 py-4 typography-small">24px</td>
                      <td class="px-6 py-4 typography-small">34px</td>
                      <td class="px-6 py-4 typography-small">Subsection headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h4</code></td>
                      <td class="px-6 py-4 typography-small">20px</td>
                      <td class="px-6 py-4 typography-small">28px</td>
                      <td class="px-6 py-4 typography-small">Article headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h5</code></td>
                      <td class="px-6 py-4 typography-small">18px</td>
                      <td class="px-6 py-4 typography-small">24px</td>
                      <td class="px-6 py-4 typography-small">Small headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-h6</code></td>
                      <td class="px-6 py-4 typography-small">16px</td>
                      <td class="px-6 py-4 typography-small">20px</td>
                      <td class="px-6 py-4 typography-small">Minor headings</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-p</code></td>
                      <td class="px-6 py-4 typography-small">16px</td>
                      <td class="px-6 py-4 typography-small">18px</td>
                      <td class="px-6 py-4 typography-small">Body text, paragraphs</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 typography-small"><code>typography-small</code></td>
                      <td class="px-6 py-4 typography-small">14px</td>
                      <td class="px-6 py-4 typography-small">16px</td>
                      <td class="px-6 py-4 typography-small">Captions, metadata</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>CSS Custom Properties</h3>

              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                <div class="typography-small font-mono text-gray-700 dark:text-gray-300">
                  /* Typography Sizes */<br>
                  --typography-size-h1: clamp(2.25rem, 2rem + 2.5vw, 3.5rem);<br>
                  --typography-size-h2: clamp(1.875rem, 1.625rem + 2vw, 2.75rem);<br>
                  --typography-size-body: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);<br>
                  <br>
                  /* Colors */<br>
                  --typography-color-heading: #111827;<br>
                  --typography-color-body: #1f2937;<br>
                  --typography-color-muted: #6b7280;<br>
                  <br>
                  /* Font Families */<br>
                  --typography-font-sans: ui-sans-serif, system-ui, sans-serif;<br>
                  --typography-font-mono: ui-monospace, SFMono-Regular, monospace;
                </div>
              </div>
            </section>

            <section>
              <h2>Browser Support</h2>

              <ul>
                <li><strong>CSS clamp():</strong> Chrome 79+, Firefox 75+, Safari 13.1+</li>
                <li><strong>CSS Custom Properties:</strong> All modern browsers, IE 11 with fallbacks</li>
                <li><strong>Viewport Units:</strong> Universal support</li>
              </ul>

              <p>
                For older browser support, consider using PostCSS plugins to provide
                fallbacks for clamp() and custom properties.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      .lead {
        font-size: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
        line-height: 1.6;
        font-weight: 400;
      }

      .not-prose * {
        margin: 0;
      }
    `,
  ],
})
export class DocsComponent {}
