import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-wrapper',
  imports: [CommonModule],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.css'
})
export class CardWrapper {
  readonly hoverEffect = input<'lift' | 'slide-right' | 'none'>('lift');
  readonly borderStyle = input<'left-accent' | 'top-accent' | 'full' | 'none'>('full');
  readonly glowColor = input<string>(''); // Dynamic color for custom card glows
}
