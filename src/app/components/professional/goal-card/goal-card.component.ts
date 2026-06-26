import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-goal-card',
  imports: [CommonModule, CardWrapper],
  templateUrl: './goal-card.component.html',
  styleUrl: './goal-card.component.css'
})
export class GoalCard {
  readonly goal = input.required<{
    date: string;
    title: string;
    summary: string;
    details: Array<{ label: string; text: string }>;
  }>();

  readonly isExpanded = signal(false);

  toggleExpand() {
    this.isExpanded.update(val => !val);
  }
}
