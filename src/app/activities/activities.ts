import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.css',
})
export class Activities {
  involvements = [
    {
      logo: 'assets/images/logo_Foy.png',
      title: 'Foyer des Élèves',
      role: 'Responsable Entretien',
      desc: 'The Foyer is one of the most important student life spaces at ENSEEIHT, serving as a central hub for relaxation and events.',
      details: [
        'Ensuring the Foyer is clean and welcoming',
        'Organizing cleaning teams after events',
        'Maintaining the space in perfect condition'
      ],
      tags: ['Team Leadership', 'Organization', 'Responsibility']
    },
    {
      logo: 'assets/images/logo_N7etMat.png',
      title: 'N7etMat',
      role: 'Treasurer',
      desc: 'The official Chess Club of ENSEEIHT, bringing together students who share a passion for strategic thinking.',
      details: [
        "Managing the club's budget for tournaments",
        'Organizing chess tournaments and ordering materials',
        'Playing twice a week during lunch breaks'
      ],
      tags: ['Budget Management', 'Strategic Thinking', 'Chess']
    }
  ];

  passions = [
    {
      icon: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z',
      color: 'var(--accent-primary)',
      title: 'Running',
      role: 'RUN7 Club Member',
      desc: "Regular running practice both individually and with the RUN7 club. It's a way to clear my mind and build resilience.",
      details: [
        'Developing endurance and discipline',
        'Training with RUN7 for group motivation',
        'Participating in races'
      ],
      tags: ['Endurance', 'Discipline', 'Mental Strength']
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
      color: 'var(--accent-secondary)',
      title: 'Handball',
      role: 'Goalkeeper • 7+ Years',
      desc: 'Passionate player with 7 years of club experience, now competing at university level as a goalkeeper.',
      details: [
        '7 years of competitive club experience',
        'Currently playing at university level',
        'Developing leadership and reflexes'
      ],
      tags: ['Team Sport', 'Leadership', 'Reflexes']
    }
  ];

  skills = [
    { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', title: 'Resilience', desc: 'Overcoming challenges and pushing beyond personal limits' },
    { icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', title: 'Team Spirit', desc: 'Working together to achieve common goals' },
    { icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z', title: 'Time Management', desc: 'Balancing academics with extracurricular commitments' },
    { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z', title: 'Leadership', desc: 'Taking initiative and guiding projects to completion' }
  ];
}
