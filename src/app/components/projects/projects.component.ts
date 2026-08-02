import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from './project-item/project-item.component';
import { PageHeader } from '../shared/page-header/page-header.component';
import { KeyLearnings } from './key-learnings/key-learnings.component';
import { ACADEMIC_PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectItem, PageHeader, KeyLearnings],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class Projects {
  protected readonly academicProjects = ACADEMIC_PROJECTS;
}
