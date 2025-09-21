import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900">
      <!-- Navigation -->
      <nav class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="typography-h6 !margin-0">tw-typography</h1>
              <span class="typography-small ml-2 text-gray-500">Responsive Typography System</span>
            </div>

            <div class="flex items-center space-x-8">
              <a
                routerLink="/showcase"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="text-gray-900 dark:text-gray-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Typography Showcase
              </a>
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
export class App {}
