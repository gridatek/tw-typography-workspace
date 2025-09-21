import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Article Header -->
      <header class="mb-12 text-center">
        <div class="mb-6">
          <span
            class="typography-small text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide"
          >
            Web Typography
          </span>
        </div>

        <h1 class="typography-h1 mb-6">
          Mastering Fluid Typography: Building Responsive Type Systems with CSS
        </h1>

        <div class="lead mb-8 text-gray-600 dark:text-gray-400">
          Discover how modern CSS techniques like clamp() and custom properties revolutionize
          responsive typography, creating seamless reading experiences across all devices without
          complex media queries.
        </div>

        <div
          class="flex items-center justify-center space-x-6 typography-small text-gray-500 dark:text-gray-400"
        >
          <time datetime="2024-01-15">January 15, 2024</time>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span>Typography, CSS, Web Design</span>
        </div>
      </header>

      <!-- Article Content using Prose -->
      <article class="prose mb-16">
        <p>
          In the ever-evolving landscape of web design, typography remains one of the most critical
          elements for creating engaging user experiences. Yet traditional approaches to responsive
          typography often fall short, relying on rigid breakpoints that create jarring transitions
          between device sizes.
        </p>

        <p>
          Enter fluid typography—a modern approach that leverages CSS custom properties and the
          powerful <code>clamp()</code> function to create type systems that scale smoothly across
          any viewport size. This isn't just about making text bigger or smaller; it's about
          crafting optimal reading experiences that adapt intelligently to user context.
        </p>

        <h2>The Problem with Traditional Responsive Typography</h2>

        <p>
          Most responsive designs rely on media queries to adjust typography at specific
          breakpoints. While this approach works, it creates several challenges:
        </p>

        <ul>
          <li><strong>Jarring transitions:</strong> Text suddenly jumps in size at breakpoints</li>
          <li>
            <strong>Complex maintenance:</strong> Multiple media queries for each typography size
          </li>
          <li>
            <strong>Limited flexibility:</strong> Fixed sizes don't adapt to in-between screen sizes
          </li>
          <li><strong>Poor user experience:</strong> Awkward text sizes on non-standard devices</li>
        </ul>

        <blockquote>
          <p>
            "The best typography is invisible. When readers can focus on content without being
            distracted by poor text rendering or uncomfortable reading experiences, the typography
            has done its job perfectly."
          </p>
        </blockquote>

        <h2>Enter CSS clamp(): The Game Changer</h2>

        <p>
          The CSS <code>clamp()</code> function accepts three parameters: a minimum value, a
          preferred value (often incorporating viewport units), and a maximum value. This creates
          truly fluid scaling.
        </p>

        <h3>Understanding the Mathematics</h3>

        <p>
          The viewport-based scaling formula works elegantly across screen sizes. For a formula like
          <code>1.5rem + 2vw</code>:
        </p>

        <ul>
          <li>
            <strong>On a 320px mobile screen:</strong> 1.5rem + (2% of 320px) = 24px + 6.4px ≈ 30px
          </li>
          <li>
            <strong>On a 768px tablet:</strong> 1.5rem + (2% of 768px) = 24px + 15.36px ≈ 39px
          </li>
          <li>
            <strong>On a 1200px desktop:</strong> 1.5rem + (2% of 1200px) = 24px + 24px = 48px
          </li>
        </ul>

        <p>
          This mathematical relationship ensures smooth, predictable scaling that feels natural
          across all device sizes.
        </p>

        <h2>Building a Complete Type System</h2>

        <p>
          A robust fluid typography system goes beyond individual font sizes. It requires
          coordinated scaling of sizes, line heights, and spacing to maintain visual hierarchy and
          readability.
        </p>

        <h3>1. Establishing the Type Scale</h3>

        <p>
          Start with a modular scale ratio (commonly 1.25 or 1.33) to create harmonious size
          relationships.
        </p>

        <h3>2. Coordinated Line Heights</h3>

        <p>
          Line heights should scale proportionally with font sizes to maintain optimal readability.
          Larger text generally needs tighter line heights.
        </p>

        <h3>3. Responsive Spacing</h3>

        <p>
          Margins and padding should also scale to maintain proper visual hierarchy and breathing
          room.
        </p>

        <h2>Implementation Strategies</h2>

        <p>
          There are several approaches to implementing fluid typography in your projects, each with
          distinct advantages:
        </p>

        <h3>Individual Utility Classes</h3>

        <p>Perfect for design systems and granular control.</p>

        <h3>Prose Wrapper Approach</h3>

        <p>Ideal for content-heavy sections where you want automatic styling.</p>

        <h2>Performance and Browser Considerations</h2>

        <p>Modern fluid typography techniques are highly performant and well-supported:</p>

        <h3>Browser Support</h3>

        <ul>
          <li><strong>CSS clamp():</strong> Chrome 79+, Firefox 75+, Safari 13.1+</li>
          <li><strong>CSS Custom Properties:</strong> All modern browsers, IE 11 with polyfills</li>
          <li><strong>Viewport Units:</strong> Universal support</li>
        </ul>

        <h3>Performance Benefits</h3>

        <ul>
          <li><strong>Reduced CSS:</strong> Fewer media queries and declarations</li>
          <li>
            <strong>Efficient calculations:</strong> clamp() calculations happen at layout time
          </li>
          <li><strong>Better caching:</strong> Fewer CSS rules mean better browser optimization</li>
        </ul>

        <h2>Best Practices and Common Pitfalls</h2>

        <p>While fluid typography is powerful, following best practices ensures optimal results:</p>

        <h3>Do's ✅</h3>

        <ul>
          <li>
            <strong>Test extensively:</strong> Use browser dev tools to simulate various screen
            sizes
          </li>
          <li>
            <strong>Maintain hierarchy:</strong> Ensure headings remain distinguishable at all sizes
          </li>
          <li>
            <strong>Consider context:</strong> Mobile screens are typically held closer than desktop
            monitors
          </li>
          <li>
            <strong>Optimize line length:</strong> Aim for 45-75 characters per line for optimal
            readability
          </li>
        </ul>

        <h3>Don'ts ❌</h3>

        <ul>
          <li><strong>Don't over-scale:</strong> Extreme scaling can hurt readability</li>
          <li>
            <strong>Don't ignore accessibility:</strong> Maintain sufficient contrast and consider
            user font size preferences
          </li>
          <li>
            <strong>Don't forget testing:</strong> Always test with real content across actual
            devices
          </li>
        </ul>

        <h2>The Future of Web Typography</h2>

        <p>
          As web technologies continue to evolve, fluid typography represents a significant step
          toward more intelligent, user-centered design. By moving beyond fixed breakpoints, we
          create experiences that truly adapt to user context.
        </p>

        <p>
          This approach aligns with broader trends in web development—from container queries to
          intrinsic web design—that prioritize flexibility and user experience over rigid,
          device-specific design patterns.
        </p>

        <h3>Looking Ahead</h3>

        <p>
          Future developments in CSS, including enhanced custom properties and potential new
          functions, will likely expand the possibilities for fluid design. The foundations we build
          today with clamp() and custom properties position us well for these upcoming innovations.
        </p>

        <h2>Conclusion</h2>

        <p>
          Fluid typography isn't just a technical improvement—it's a fundamental shift toward more
          thoughtful, user-centered design. By embracing CSS clamp() and systematic approaches to
          type scaling, we can create reading experiences that feel natural and comfortable on any
          device.
        </p>

        <p>
          The investment in setting up a robust fluid typography system pays dividends in reduced
          maintenance, improved user experience, and future-ready design patterns. As the web
          continues to diversify across form factors, fluid typography ensures our content remains
          accessible and beautifully presented for every user.
        </p>
      </article>

      <!-- Author Bio -->
      <aside class="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div class="flex items-start space-x-4">
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span class="typography-h5 text-white font-bold">TT</span>
          </div>
          <div>
            <h3 class="typography-h5 mb-2">Typography Team</h3>
            <p class="typography-p text-gray-600 dark:text-gray-400 mb-3">
              Passionate about creating beautiful, accessible typography systems for the modern web.
              Focused on user experience, performance, and maintainable design patterns.
            </p>
            <div class="flex space-x-4 typography-small">
              <a href="#" class="typography-link">Follow on Twitter</a>
              <a href="#" class="typography-link">View GitHub</a>
              <a href="#" class="typography-link">Read More Articles</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  `,
  styles: [
    `
      .lead {
        font-size: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
        line-height: 1.6;
        font-weight: 400;
      }
    `,
  ],
})
export class BlogComponent {}
