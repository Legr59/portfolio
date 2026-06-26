import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.css'
})
export class NavButton {
  readonly link = input.required<string>();
  readonly label = input.required<string>();
  readonly exact = input<boolean>(false);
  readonly clicked = output<void>();
}
