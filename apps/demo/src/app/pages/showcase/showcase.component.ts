import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <h1 class="typography-h1 mb-6">Responsive Typography Showcase</h1>
        <p class="typography-p max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
          Explore how tw-typography provides fluid, responsive typography that scales smoothly across all device sizes.
          Resize your browser window to see the magic in action.
        </p>
        <div class="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
          <p class="typography-small text-blue-800 dark:text-blue-200">
            💡 <strong>Try this:</strong> Open browser DevTools and toggle device sizes, or manually resize the window to see fluid typography scaling.
          </p>
        </div>
      </section>

      <!-- Typography Scale Demo -->
      <section class="mb-16">
        <h2 class="typography-h2 mb-8">Typography Scale Hierarchy</h2>

        <div class="space-y-8">
          <!-- Individual Utilities Demo -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 class="typography-h3 mb-6">Individual Typography Utilities</h3>

            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4">
                <h1 class="typography-h1">H1 Heading - Page Title</h1>
                <code class="typography-code">typography-h1</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 36px to 56px • For page titles and hero headings
                </p>
              </div>

              <div class="border-l-4 border-green-500 pl-4">
                <h2 class="typography-h2">H2 Heading - Section Title</h2>
                <code class="typography-code">typography-h2</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 30px to 44px • For major section headings
                </p>
              </div>

              <div class="border-l-4 border-yellow-500 pl-4">
                <h3 class="typography-h3">H3 Heading - Subsection</h3>
                <code class="typography-code">typography-h3</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 24px to 34px • For subsection titles
                </p>
              </div>

              <div class="border-l-4 border-red-500 pl-4">
                <h4 class="typography-h4">H4 Heading - Article Title</h4>
                <code class="typography-code">typography-h4</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 20px to 28px • For article and content headings
                </p>
              </div>

              <div class="border-l-4 border-purple-500 pl-4">
                <h5 class="typography-h5">H5 Heading - Small Section</h5>
                <code class="typography-code">typography-h5</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 18px to 24px • For minor headings
                </p>
              </div>

              <div class="border-l-4 border-pink-500 pl-4">
                <h6 class="typography-h6">H6 Heading - Minor Title</h6>
                <code class="typography-code">typography-h6</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 16px to 20px • For smallest headings
                </p>
              </div>

              <div class="border-l-4 border-gray-500 pl-4">
                <p class="typography-p">Body Paragraph - Regular text content for optimal readability across all devices</p>
                <code class="typography-code">typography-p</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 16px to 18px • For body text and paragraphs
                </p>
              </div>

              <div class="border-l-4 border-gray-400 pl-4">
                <small class="typography-small">Small text - captions, metadata, and fine print</small>
                <br>
                <code class="typography-code">typography-small</code>
                <p class="typography-small text-gray-600 dark:text-gray-400 mt-2">
                  Scales from 14px to 16px • For captions and metadata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Special Elements Demo -->
      <section class="mb-16">
        <h2 class="typography-h2 mb-8">Special Typography Elements</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Links -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="typography-h4 mb-4">Interactive Links</h3>
            <p class="typography-p mb-4">
              Links have built-in hover effects: <a href="#" class="typography-link">hover over this link</a>
              to see the smooth color transition.
            </p>
            <code class="typography-code">typography-link</code>
          </div>

          <!-- Code Elements -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="typography-h4 mb-4">Code Elements</h3>
            <p class="typography-p mb-4">
              Inline code like <code class="typography-code">const example = 'code';</code>
              and block code:
            </p>
            <pre class="typography-pre">function scaleExample() &#123;
  return 'Responsive typography!';
&#125;</pre>
          </div>

          <!-- Blockquotes -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="typography-h4 mb-4">Blockquotes</h3>
            <blockquote class="typography-blockquote">
              "Typography is the craft of endowing human language with a durable visual form."
            </blockquote>
            <code class="typography-code">typography-blockquote</code>
          </div>

          <!-- Lists -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="typography-h4 mb-4">Lists</h3>
            <ul class="typography-ul">
              <li class="typography-li">Unordered list item</li>
              <li class="typography-li">Another list item</li>
              <li class="typography-li">Third item</li>
            </ul>
            <code class="typography-code">typography-ul + typography-li</code>
          </div>
        </div>
      </section>

      <!-- Prose Wrapper Demo -->
      <section class="mb-16">
        <h2 class="typography-h2 mb-8">Prose Wrapper Demo</h2>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-8">
          <div class="max-w-4xl mx-auto">
            <p class="typography-p text-center text-gray-600 dark:text-gray-400 mb-8">
              The <code class="typography-code">prose</code> utility automatically styles all nested elements.
              Perfect for blog posts, articles, and rich content.
            </p>

            <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
              <article class="prose">
                <h1>The Future of Responsive Typography</h1>

                <p class="lead">
                  Modern web design demands typography that adapts fluidly across devices.
                  This article explores how CSS clamp() revolutionizes responsive design.
                </p>

                <h2>Why Fluid Typography Matters</h2>

                <p>
                  Traditional responsive design relies on breakpoints—discrete points where
                  design changes occur. While effective, this approach can create jarring
                  transitions between device sizes.
                </p>

                <blockquote>
                  <p>
                    "The best typography is invisible—it serves the content without
                    drawing attention to itself."
                  </p>
                </blockquote>

                <h3>The CSS clamp() Function</h3>

                <p>
                  CSS clamp() enables truly fluid scaling. It takes three parameters:
                </p>

                <ul>
                  <li><strong>Minimum value:</strong> The smallest size (mobile)</li>
                  <li><strong>Preferred value:</strong> The scaling formula</li>
                  <li><strong>Maximum value:</strong> The largest size (desktop)</li>
                </ul>

                <pre><code>font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);</code></pre>

                <h4>Implementation Benefits</h4>

                <ol>
                  <li>Smooth scaling across all viewport sizes</li>
                  <li>Reduced CSS complexity and media queries</li>
                  <li>Better user experience on all devices</li>
                  <li>Future-proof design system</li>
                </ol>

                <p>
                  This approach creates <em>truly responsive</em> typography that adapts
                  to any screen size, providing optimal readability without manual
                  breakpoint management.
                </p>

                <h5>Browser Support</h5>

                <p>
                  CSS clamp() is supported in all modern browsers, making it a reliable
                  choice for production websites. For older browsers, consider using
                  PostCSS plugins as fallbacks.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Responsive Test Section -->
      <section class="mb-16">
        <h2 class="typography-h2 mb-8">Interactive Responsive Test</h2>

        <div class="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-8">
          <h3 class="typography-h3 mb-6">Test Typography Scaling</h3>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-yellow-200 dark:border-yellow-700">
              <h4 class="typography-h5 mb-2">📱 Mobile</h4>
              <p class="typography-small text-gray-600 dark:text-gray-400">320px - 768px</p>
              <p class="typography-small">Minimum sizes</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-yellow-200 dark:border-yellow-700">
              <h4 class="typography-h5 mb-2">💻 Tablet/Laptop</h4>
              <p class="typography-small text-gray-600 dark:text-gray-400">768px - 1440px</p>
              <p class="typography-small">Fluid scaling</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-yellow-200 dark:border-yellow-700">
              <h4 class="typography-h5 mb-2">🖥️ Desktop</h4>
              <p class="typography-small text-gray-600 dark:text-gray-400">1440px+</p>
              <p class="typography-small">Maximum sizes</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-yellow-200 dark:border-yellow-700">
            <h3 class="typography-h3 text-center">Typography scales smoothly!</h3>
            <p class="typography-p text-center">
              This text adjusts its size based on your viewport width,
              creating optimal readability at every screen size.
            </p>

            <div class="text-center mt-6">
              <p class="typography-small text-gray-600 dark:text-gray-400">
                Current browser width affects all typography sizes above ↑
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Details -->
      <section>
        <h2 class="typography-h2 mb-8">Technical Implementation</h2>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h3 class="typography-h4 mb-4">Key Features</h3>
          <ul class="typography-ul">
            <li class="typography-li">✅ <strong>Fluid Scaling:</strong> Uses CSS clamp() for smooth responsive behavior</li>
            <li class="typography-li">✅ <strong>CSS Variables:</strong> Centralized control via custom properties</li>
            <li class="typography-li">✅ <strong>Two Patterns:</strong> Individual utilities and prose wrapper</li>
            <li class="typography-li">✅ <strong>Dark Mode:</strong> Automatic color scheme support</li>
            <li class="typography-li">✅ <strong>Tailwind Integration:</strong> Works with @utility directive</li>
            <li class="typography-li">✅ <strong>Performance:</strong> Minimal CSS, no JavaScript required</li>
          </ul>

          <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p class="typography-small text-blue-800 dark:text-blue-200">
              <strong>💡 How it works:</strong> Each typography size uses clamp(min, preferred, max) where the preferred value includes viewport units (vw) for fluid scaling between minimum and maximum sizes.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .lead {
        font-size: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
        line-height: 1.6;
        color: var(--color-typography-body);
        font-weight: var(--font-weight-normal);
        margin-bottom: calc(6 * var(--spacing));
      }
    `,
  ],
})
export class ShowcaseComponent {}
