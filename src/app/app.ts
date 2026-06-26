import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio');
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const body = document.body;
      body.className = body.className.split(' ').filter(c => !c.startsWith('route-')).join(' ');
      
      const url = event.urlAfterRedirects || event.url;
      const routeName = url.split('/')[1] || 'home';
      body.classList.add(`route-${routeName}`);
    });
  }
}
