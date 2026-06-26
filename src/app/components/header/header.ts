import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavButton } from './nav-button/nav-button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NavButton],
  templateUrl: './header.component.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly isMenuOpen = signal(false);

  protected readonly menuItems = [
    { link: '/', label: 'Home', exact: true },
    { link: '/education', label: 'Education' },
    { link: '/projects', label: 'Projects' },
    { link: '/activities', label: 'Activities' },
    { link: '/mobility', label: 'International' },
    { link: '/professional', label: 'Career' },
    { link: '/contact', label: 'Contact' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
