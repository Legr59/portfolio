import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../shared/page-header/page-header.component';
import { TimelineItem } from './timeline-item/timeline-item.component';
import { ACADEMIC_TIMELINE } from './education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, PageHeader, TimelineItem],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class Education {
  protected readonly academicTimeline = ACADEMIC_TIMELINE;
}
