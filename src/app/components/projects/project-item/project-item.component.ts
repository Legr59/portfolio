import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapper } from '../../shared/card-wrapper/card-wrapper.component';
import { Project } from '../projects.data';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, CardWrapper],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItem {
  readonly project = input.required<Project>();
}
