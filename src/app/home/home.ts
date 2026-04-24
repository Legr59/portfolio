import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.css',
})
export class Home {
  cvButtons = [
    { label: 'CV Français', link: 'assets/Source/CV_Martin_LEGRAND_FR.pdf', class: 'cv-button-fr' },
    { label: 'CV English', link: 'assets/Source/CV_EN.pdf', class: 'cv-button-en' }
  ];

  softwareSkills = [
    { name: 'VHDL', img: 'assets/images/VHDL.png' },
    { name: 'Vivado', img: 'assets/images/vivado.png' },
    { name: 'ADS', img: 'assets/images/ADS.jpg' },
    { name: 'OrCAD', img: 'assets/images/Orcad.png' },
    { name: 'PSpice', img: 'assets/images/Pspice.png' },
    { name: 'MPLAB', img: 'assets/images/MPlab.png' },
    { name: 'C', img: 'assets/images/C.png' },
    { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'LaTeX', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' },
    { name: 'HFSS', img: 'assets/images/logo_HFSS.png' }
  ];

  navigationCards = [
    { link: '/education', title: 'Education', desc: 'My academic journey and specializations', icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
    { link: '/projects', title: 'Projects', desc: 'Technical projects and professional experiences', icon: 'M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z' },
    { link: '/activities', title: 'Hobbies & Involvement', desc: 'Student life and civic engagement', icon: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z' },
    { link: '/mobility', title: 'International Profile', desc: 'Languages and global experiences', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
    { link: '/professional', title: 'Professional Project', desc: 'Career goals and aspirations', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }
  ];
}
