import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional.component.html',
  styleUrl: './professional.css',
})
export class Professional {
  careerGoals = [
    {
      date: 'Short-term (Gap Year 2025-2026)',
      title: 'Building International Experience',
      summary: 'Gap year focused on gaining professional experience abroad and in France',
      expanded: false,
      details: [
        { label: '🌍 Internship Abroad', text: 'Gain hands-on experience in countries renowned for their expertise in electronics (Germany, Italy, Japan). Target companies: TESAT-Spacecom, Thales Alenia Space, Magneti Marelli.' },
        { label: '🇫🇷 Internship in France', text: 'Secure a position in the automotive, aeronautics, or aerospace industry with leading companies such as Airbus, Safran, or Thales.' },
        { label: '🎓 Return to ENSEEIHT', text: 'Continue my InSys (Systems Integration) track with specialized options: Power Management and Analog Deepening.' }
      ]
    },
    {
      date: 'Medium-term (3-5 years)',
      title: 'Electronics Design Engineer in Aerospace',
      summary: 'Join the aerospace industry as an Electronics Design Engineer',
      expanded: false,
      details: [
        { label: '🚀 Aerospace Entry', text: 'Enter a leading aerospace company working on cutting-edge embedded systems and architecture for satellites or aircraft.' },
        { label: '🎯 Target sectors', text: 'Satellite communication, Avionics, Power electronics, and Embedded systems for aerospace.' }
      ]
    },
    {
      date: 'Long-term (5+ years)',
      title: 'International Leadership',
      summary: 'Evolve toward technical leadership and international opportunities',
      expanded: false,
      details: [
        { label: '👔 Leadership Role', text: 'Transition to a leadership role, leveraging both technical expertise and cross-cultural experience.' },
        { label: '📈 Aspirations', text: 'Lead engineering teams, potentially relocate abroad, and take on project lead responsibilities.' }
      ]
    }
  ];

  experiences = [
    {
      role: 'Versatile Employee',
      company: 'Carter-Cash — Comines (59)',
      date: 'August 2025',
      description: 'Delivery reception and customer relations management in an automotive retail environment.',
      skills: ['Customer service skills', 'Organization (inventory/stock)', 'Efficiency in fast-paced retail']
    },
    {
      role: 'Operator Intern',
      company: 'Fives FCB — Lille (59)',
      date: 'June - July 2025',
      description: 'Industrial internship in a leading engineering company specializing in cement plant equipment.',
      skills: ['Industrial environment experience', 'Physical/Chemical lab testing', 'Teamwork with operators and engineers']
    },
    {
      role: 'Farm Worker',
      company: 'Agricultural Farm — Belgium',
      date: 'June - July 2022',
      description: 'Summer job working on a farm, assisting with daily agricultural operations.',
      skills: ['Strong work ethic (early starts)', 'Adaptability (outdoor conditions)', 'Autonomy and initiative']
    },
    {
      role: 'Handball Referee',
      company: 'Handball Federation — Nord (59)',
      date: '2018 - 2020',
      description: 'Officiating handball matches at regional level while still in high school.',
      skills: ['Decision-making under pressure', 'Authority and communication', 'Stress management']
    }
  ];

  interests = [
    {
      icon: 'M7 2v11h3v9l7-12h-4l4-8z',
      title: 'Analog Electronics',
      desc: 'Signal conditioning, amplifiers, power electronics'
    },
    {
      icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
      title: 'Digital Design',
      desc: 'FPGA, VHDL, digital signal processing'
    },
    {
      icon: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
      title: 'Embedded Systems',
      desc: 'Microcontrollers, real-time systems, IoT'
    }
  ];

  toggleGoal(goal: any) {
    goal.expanded = !goal.expanded;
  }
}
