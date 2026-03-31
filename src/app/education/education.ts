import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.css',
})
export class Education {
  academicTimeline = [
    {
      date: '2026 – 2027',
      status: 'upcoming',
      statusLabel: 'Upcoming',
      title: 'Gap Year',
      summary: 'Gap Year — Professional & International Experience',
      expanded: false,
      details: [
        '6-month internship — Currently searching for an engineering internship in electronics',
        'International experience — Planning to travel and live abroad for several months'
      ]
    },
    {
      date: 'Spring 2026',
      status: 'current',
      statusLabel: 'Current',
      title: 'S8 — InSys Track',
      summary: 'ENSEEIHT Toulouse — Systems Integration Specialization',
      expanded: false,
      details: [
        'Microwave Engineering — Waveguide theory, antenna design and simulation (HFSS)',
        'Cleanroom Laboratory — CMOS fabrication process, lithography, etching',
        'Digital Systems Architecture — Advanced FPGA-based SoC design',
        'Optoelectronic Circuits — Optical fiber communication links',
        'Nanosatellite Systems — CubeSat subsystem design (power, communication)'
      ]
    },
    {
      date: 'Autumn 2025',
      status: 'completed',
      statusLabel: 'Completed',
      title: 'S7 — Electronics',
      summary: 'ENSEEIHT Toulouse — 3EA Department',
      expanded: false,
      details: [
        'RF Analog Electronics — High-frequency amplifier design, noise analysis',
        'LF Analog Electronics — Transistor-level design; Project: FM Optoelectronic Link',
        'Digital Electronics (VHDL) — FSM design; Project: Frequency Meter on Artix-7',
        'Electromagnetic Propagation — Wave propagation, Smith chart analysis',
        'Information Processing (C++) — Project: RFID Access Control with PIC18F'
      ]
    },
    {
      date: 'Spring 2025',
      status: 'completed',
      statusLabel: 'Completed',
      title: 'S6 — Fundamentals II',
      summary: 'ENSEEIHT Toulouse — 3EA Department',
      expanded: false,
      details: [
        'Mathematics and Signal Processing',
        'Project: IoT Heart Monitor',
        'Electronic Circuits'
      ]
    },
    {
      date: 'Autumn 2024',
      status: 'completed',
      statusLabel: 'Completed',
      title: 'S5 — Fundamentals I',
      summary: 'ENSEEIHT Toulouse — 3EA Department',
      expanded: false,
      details: [
        'Mathematics and Electromagnetism',
        'Electrical Circuits',
        'Programming (C)'
      ]
    },
    {
      date: '2022 - 2024',
      status: 'completed',
      statusLabel: 'Completed',
      title: 'Classe Préparatoire aux Grandes Écoles',
      summary: 'MPSI / MP* — Lycée Henri Wallon (59)',
      expanded: false,
      details: [
        'Mathematics (Analysis, Algebra, Probability)',
        'Physics (Mechanics, Electromagnetism, Thermodynamics)',
        'Engineering Sciences and Computer Science (Python)',
        'Developing organization, efficiency, and work rigor'
      ]
    }
  ];

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
  }
}
