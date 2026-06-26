import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCard } from '../../shared/highlight-card/highlight-card.component';

@Component({
  selector: 'app-key-learnings',
  standalone: true,
  imports: [CommonModule, HighlightCard],
  templateUrl: './key-learnings.component.html',
  styleUrl: './key-learnings.css'
})
export class KeyLearnings {}
