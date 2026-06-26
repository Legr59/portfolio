import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-project-item',
  imports: [CommonModule, CardWrapper],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.css'
})
export class ProjectItem {
  readonly project = input.required<{
    meta: string;
    type: string;
    title: string;
    description: string;
    columns: Array<{ title: string; tasks: string[] }>;
    tags: string[];
  }>();
}
