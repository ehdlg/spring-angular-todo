import { Component } from '@angular/core';
import { ThemeToggleIconComponent } from './theme-toggle-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleIconComponent],
  template: `
    <header class="w-full flex justify-between items-center">
      <h1
        class="text-5xl m-4 tracking-widest bg-gradient-to-tr from-purple-400  to-purple-700 inline-block text-transparent bg-clip-text w-fit"
      >
        TODO
      </h1>
      <button (click)="toggleDarkMode()">
        <app-theme-toggle-icon
          [darkMode]="darkMode"
          class="size-8 text-purple-400  hover:text-purple-600 hover:scale-110 transition ease-in"
        />
      </button>
    </header>
  `,
})
export class HeaderComponent {
  private static htmlElement = document.documentElement;
  public darkMode: boolean =
    HeaderComponent.htmlElement.classList.contains('dark');

  public toggleDarkMode() {
    if (HeaderComponent.htmlElement.classList.contains('dark')) {
      this.darkMode = false;
      window.localStorage.setItem('theme', 'light');
    } else {
      this.darkMode = true;
      window.localStorage.setItem('theme', 'dark');
    }

    HeaderComponent.htmlElement.classList.toggle('dark');
  }
}
