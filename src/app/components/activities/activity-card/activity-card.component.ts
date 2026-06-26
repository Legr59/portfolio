import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-activity-card',
  imports: [CommonModule, CardWrapper],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCard {
  readonly title = input.required<string>();
  readonly role = input.required<string>();
  readonly desc = input.required<string>();
  readonly details = input.required<string[]>();
  readonly tags = input.required<string[]>();

  readonly logo = input<string>(''); // Image logo (optional)
  readonly icon = input<string>(''); // SVG icon path (optional)
  readonly iconColor = input<string>('currentColor'); // SVG icon fill color (optional)
}
