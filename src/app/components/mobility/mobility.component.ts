import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../shared/page-header/page-header.component';
import { HighlightCard } from '../shared/highlight-card/highlight-card.component';

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [CommonModule, PageHeader, HighlightCard],
  templateUrl: './mobility.component.html',
  styleUrl: './mobility.component.css',
})
export class Mobility {
  pceSkills = [
    {
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      title: 'Professional Emails',
      desc: 'Writing clear, concise and professional emails in English for business communication'
    },
    {
      icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
      title: 'Networking',
      desc: 'Building professional relationships and expanding connections in international settings'
    },
    {
      icon: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',
      title: 'Video Communication',
      desc: 'Effective presentation and communication skills for remote meetings and conferences'
    }
  ];

  languages = [
    { 
      title: 'French', 
      level: 'Native language',
      icon: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm0-3h12v2H6V6zm0 6h9v2H6v-2z' // Chat bubble with text lines
    },
    { 
      title: 'English', 
      level: 'Fluent (Professional)',
      icon: 'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z' // Translate / language icon
    },
    { 
      title: 'Japanese', 
      level: 'Beginner level (currently learning)',
      icon: 'M2 4h20v2h-3v14h-2V6H7v14H5V6H2V4zm4 4h12v2H6V8z' // Torii gate structure
    }
  ];

  internationalGoals = [
    {
      icon: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
      title: 'Internship Abroad',
      desc: 'Seeking opportunity in the aerospace and automotive electronics industry',
      listTitle: 'Target Companies:',
      bulletPoints: ['TESAT-Spacecom – Germany', 'Thales Alenia Space – Europe', 'Magneti Marelli – Italy']
    },
    {
      icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
      title: 'Erasmus Semester',
      desc: 'Exchange semester at a prestigious European university',
      listTitle: 'Target Universities:',
      bulletPoints: ['TU München (TUM) – Germany', 'Politecnico di Milano (Polimi) – Italy']
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
      title: 'Volunteer Work Abroad',
      desc: 'Open to association and volunteer opportunities abroad.',
      listTitle: '',
      bulletPoints: []
    }
  ];
}
