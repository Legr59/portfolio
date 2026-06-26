import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journey-card',
  imports: [RouterLink],
  templateUrl: './journey-card.component.html',
  styleUrl: './journey-card.component.css'
})
export class JourneyCard {
  readonly link = input.required<string>();
  readonly title = input.required<string>();
  readonly desc = input.required<string>();
  readonly icon = input.required<string>();
}
