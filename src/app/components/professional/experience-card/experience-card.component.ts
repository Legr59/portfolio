import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule, CardWrapper],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCard {
  readonly exp = input.required<{
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
  }>();
}
