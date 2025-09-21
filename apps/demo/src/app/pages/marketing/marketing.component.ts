import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  template: `
    <div class="bg-white dark:bg-gray-900">
      <!-- Hero Section -->
      <section
        class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
      >
        <div class="absolute inset-0 bg-black opacity-10"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div class="text-center">
            <h1 class="typography-h1 mb-6 text-white">Typography That Scales Beautifully</h1>
            <p class="hero-lead text-blue-100 mb-8 max-w-3xl mx-auto">
              Introducing tw-typography: the modern CSS system that creates fluid, responsive
              typography scaling smoothly across all devices without complex media queries.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors typography-p"
              >
                Get Started Free
              </button>
              <button
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors typography-p"
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="typography-h2 mb-6">Why Choose Fluid Typography?</h2>
            <p class="typography-p text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Traditional responsive design creates jarring transitions at breakpoints. Our fluid
              approach ensures smooth, beautiful typography scaling across every device size.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div
                class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6"
              >
                <span class="typography-h5 text-blue-600 dark:text-blue-400">📱</span>
              </div>
              <h3 class="typography-h4 mb-4">Smooth Scaling</h3>
              <p class="typography-p text-gray-600 dark:text-gray-400">
                Typography scales continuously using CSS clamp() functions, eliminating awkward
                jumps between screen sizes for a seamless reading experience.
              </p>
            </div>

            <!-- Feature 2 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6"
              >
                <span class="typography-h5 text-green-600 dark:text-green-400">⚡</span>
              </div>
              <h3 class="typography-h4 mb-4">Better Performance</h3>
              <p class="typography-p text-gray-600 dark:text-gray-400">
                Fewer CSS rules and media queries mean faster load times, smaller bundles, and
                better browser optimization for improved user experience.
              </p>
            </div>

            <!-- Feature 3 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6"
              >
                <span class="typography-h5 text-purple-600 dark:text-purple-400">🎨</span>
              </div>
              <h3 class="typography-h4 mb-4">Design System Ready</h3>
              <p class="typography-p text-gray-600 dark:text-gray-400">
                Built with CSS custom properties and Tailwind CSS integration, making it perfect for
                modern design systems and development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Comparison Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="typography-h2 mb-6">Traditional vs. Fluid Typography</h2>
            <p class="typography-p text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See the difference between old-school breakpoint-based typography and modern fluid
              scaling approaches.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Traditional Approach -->
            <div
              class="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-8"
            >
              <div class="flex items-center mb-6">
                <span class="typography-h5 text-red-600 dark:text-red-400 mr-3">❌</span>
                <h3 class="typography-h4 text-red-900 dark:text-red-100">Traditional Approach</h3>
              </div>

              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="typography-small text-red-600 dark:text-red-400 mr-2">•</span>
                  <p class="typography-small text-red-800 dark:text-red-200">
                    Jarring transitions at breakpoints
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="typography-small text-red-600 dark:text-red-400 mr-2">•</span>
                  <p class="typography-small text-red-800 dark:text-red-200">
                    Complex CSS with many media queries
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="typography-small text-red-600 dark:text-red-400 mr-2">•</span>
                  <p class="typography-small text-red-800 dark:text-red-200">
                    Poor experience on non-standard sizes
                  </p>
                </div>
              </div>
            </div>

            <!-- Fluid Approach -->
            <div
              class="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-8"
            >
              <div class="flex items-center mb-6">
                <span class="typography-h5 text-green-600 dark:text-green-400 mr-3">✅</span>
                <h3 class="typography-h4 text-green-900 dark:text-green-100">Fluid Approach</h3>
              </div>

              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="typography-small text-green-600 dark:text-green-400 mr-2">•</span>
                  <p class="typography-small text-green-800 dark:text-green-200">
                    Smooth scaling across all screen sizes
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="typography-small text-green-600 dark:text-green-400 mr-2">•</span>
                  <p class="typography-small text-green-800 dark:text-green-200">
                    Minimal CSS with no media queries
                  </p>
                </div>
                <div class="flex items-start">
                  <span class="typography-small text-green-600 dark:text-green-400 mr-2">•</span>
                  <p class="typography-small text-green-800 dark:text-green-200">
                    Perfect on any device size
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Live Demo Section -->
      <section
        class="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="typography-h2 mb-6">See It In Action</h2>
            <p class="typography-p text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Resize your browser window to see how typography scales smoothly across different
              viewport sizes. No breakpoints, just beautiful scaling.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 lg:p-12">
            <div class="text-center mb-8">
              <h3
                class="typography-h1 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Typography Scales Beautifully
              </h3>
              <p class="typography-p text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                This heading and paragraph automatically adjust their size based on your current
                viewport width, creating the perfect reading experience at every screen size.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="typography-h4 mb-3">Mobile (320px)</h4>
                <p class="typography-small text-gray-600 dark:text-gray-400">
                  Text sizes are optimized for close reading distances and smaller screens.
                </p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="typography-h4 mb-3">Desktop (1440px+)</h4>
                <p class="typography-small text-gray-600 dark:text-gray-400">
                  Larger text sizes account for increased reading distance and screen real estate.
                </p>
              </div>
            </div>

            <div class="text-center">
              <p class="typography-small text-blue-600 dark:text-blue-400 font-medium">
                Try resizing your browser window to see the fluid scaling in real-time!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="typography-h2 mb-6">Loved by Developers & Designers</h2>
            <p class="typography-p text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join the growing community of developers who've revolutionized their typography
              workflow with fluid scaling.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div class="mb-6">
                <div class="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <blockquote class="typography-p text-gray-700 dark:text-gray-300">
                  "Finally, typography that just works across all devices. No more wrestling with
                  media queries or awkward text sizes."
                </blockquote>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                >
                  <span class="typography-small text-white font-bold">SA</span>
                </div>
                <div>
                  <p class="typography-small font-semibold">Sarah Anderson</p>
                  <p class="typography-small text-gray-500">UI/UX Designer</p>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div class="mb-6">
                <div class="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <blockquote class="typography-p text-gray-700 dark:text-gray-300">
                  "Our bundle size decreased and performance improved significantly. The developer
                  experience is fantastic."
                </blockquote>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3"
                >
                  <span class="typography-small text-white font-bold">MC</span>
                </div>
                <div>
                  <p class="typography-small font-semibold">Marcus Chen</p>
                  <p class="typography-small text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div class="mb-6">
                <div class="flex text-yellow-400 mb-4">
                  <span>★★★★★</span>
                </div>
                <blockquote class="typography-p text-gray-700 dark:text-gray-300">
                  "Game-changer for our design system. Consistent typography across all platforms
                  with minimal maintenance."
                </blockquote>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3"
                >
                  <span class="typography-small text-white font-bold">EK</span>
                </div>
                <div>
                  <p class="typography-small font-semibold">Emily Kim</p>
                  <p class="typography-small text-gray-500">Design Systems Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="typography-h2 mb-6 text-white">Ready to Transform Your Typography?</h2>
          <p class="hero-lead text-blue-100 mb-8">
            Join thousands of developers who've already upgraded to fluid typography. Get started in
            minutes with our comprehensive documentation and examples.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors typography-p"
            >
              Start Building Now
            </button>
            <button
              class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors typography-p"
            >
              View Examples
            </button>
          </div>

          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 class="typography-h4 text-white mb-2">1.2KB</h3>
              <p class="typography-small text-blue-200">Gzipped size</p>
            </div>
            <div>
              <h3 class="typography-h4 text-white mb-2">Zero JS</h3>
              <p class="typography-small text-blue-200">Pure CSS solution</p>
            </div>
            <div>
              <h3 class="typography-h4 text-white mb-2">Modern</h3>
              <p class="typography-small text-blue-200">Browser support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .hero-lead {
        font-size: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
        line-height: 1.6;
        font-weight: 400;
      }
    `,
  ],
})
export class MarketingComponent {}
