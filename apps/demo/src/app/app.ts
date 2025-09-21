import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <!-- Individual control with standalone utilities -->
    <h1 class="typography-h1">Page Title</h1>
    <h2 class="typography-h2">Section Title</h2>
    <p class="typography-p">Body paragraph with proper spacing.</p>
    <blockquote class="typography-blockquote">A thoughtful quote</blockquote>
    <code class="typography-code">inline code</code>
    <small class="typography-small">Small text</small>

    <!-- Rich text block using prose wrapper -->
    <article class="prose">
      <h1>Article Title</h1>
      <p>This paragraph automatically gets the right styling.</p>
      <h2>Subsection</h2>
      <p>Another paragraph with <strong>bold text</strong> and <em>italics</em>.</p>
      <blockquote>
        <p>A blockquote that follows the typography guidelines.</p>
      </blockquote>
      <ul>
        <li>List item one</li>
        <li>List item two</li>
      </ul>
      <pre><code>// Code block
const example = 'formatted code';</code></pre>
    </article>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('demo');
}
