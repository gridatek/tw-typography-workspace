import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-white" [class.dark]="isDarkMode()">
      <!-- Navigation -->
      <nav class="border-b border-gray-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="typography-h6 !margin-0">tw-typography</h1>
              <span class="typography-small ml-2 text-gray-500">Responsive Typography System</span>
            </div>

            <div class="flex items-center space-x-6">
              <a
                routerLink="/showcase"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Showcase
              </a>
              <a
                routerLink="/blog"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog Article
              </a>
              <a
                routerLink="/marketing"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Marketing
              </a>
              <a
                routerLink="/docs"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Documentation
              </a>

              <!-- Dark Mode Toggle -->
              <button
                (click)="toggleDarkMode()"
                class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
              >
                @if (isDarkMode()) {
                  <!-- Sun Icon (Light Mode) -->
                  <svg
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                } @else {
                  <!-- Moon Icon (Dark Mode) -->
                  <svg
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main>
        <router-outlet />
      </main>

      <!-- Footer -->
      <footer
        class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 mt-16"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="text-center">
            <p class="typography-small text-gray-600 dark:text-gray-400">
              Built with tw-typography • Fluid Responsive Typography System
            </p>
            <p class="typography-small text-gray-500 dark:text-gray-500 mt-2">
              Resize your browser window to see the typography scale smoothly
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [],
})
export class App {
  isDarkMode = signal(false);

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}
