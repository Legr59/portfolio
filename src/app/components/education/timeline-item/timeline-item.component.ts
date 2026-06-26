import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-timeline-item',
  imports: [CommonModule, CardWrapper],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css'
})
export class TimelineItem {
  readonly item = input.required<{
    date: string;
    status: string;
    statusLabel: string;
    title: string;
    summary: string;
    details: string[];
  }>();

  readonly isExpanded = signal(false);

  toggleExpand() {
    if (this.item().details.length > 0) {
      this.isExpanded.update(val => !val);
    }
  }
}
