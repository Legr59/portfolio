import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-highlight-card',
  imports: [CommonModule, CardWrapper],
  templateUrl: './highlight-card.component.html',
  styleUrl: './highlight-card.component.css'
})
export class HighlightCard {
  readonly title = input.required<string>();
  readonly desc = input.required<string>();

  readonly icon = input<string>('');
  readonly listTitle = input<string>('');
  readonly bulletPoints = input<string[]>([]);
  readonly hoverEffect = input<'lift' | 'none'>('none');
}
