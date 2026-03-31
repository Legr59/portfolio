import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.css',
})
export class Projects {
  academicProjects = [
    {
      meta: 'ENSEEIHT • 2025-2026',
      type: 'Analog Systems Project',
      title: 'FM Optoelectronic Link: Emitter & Receiver Design',
      description: 'Design and hardware implementation of a complete frequency-modulated (FM) optical communication system for audio transmission. This project involved the precise sizing of modulation, demodulation, and power stages.',
      columns: [
        {
          title: 'Emitter: FM Modulation & LED Driving',
          tasks: [
            'Input Conditioning: Active audio filter boosting high frequencies to improve SNR before modulation.',
            'FM Modulation: VCO centered at f₀, converting audio signals into frequency deviations.',
            'Optical Transmission: LED driver circuit (Bipolar/MOS) optimizing linearity and rise time.'
          ]
        },
        {
          title: 'Receiver: Demodulation & Power Output',
          tasks: [
            'Transimpedance: Photodiode current conversion followed by high-gain cascode and differential pair.',
            'FM Demodulation: Phase-Locked Loop (PLL) system for accurate frequency-to-voltage conversion.',
            'Power Stage: Class AB Push-Pull amplifier providing high current gain to drive the speaker.'
          ]
        }
      ],
      tags: ['VCO & PLL Systems', 'FM Modulation', 'Push-Pull Power Amp', 'Optoelectronics', 'PSpice']
    },
    {
      meta: 'ENSEEIHT • 2025-2026',
      type: 'Embedded Systems Project',
      title: 'RFID-Based Access Control System',
      description: 'Development of an automated security system using a PIC18F microcontroller. The project integrates an RFID reader and a servo-controlled door mechanism, focusing on real-time embedded communication.',
      columns: [
        {
          title: 'Embedded Hardware & Communication',
          tasks: [
            'RFID Interfacing: Establishing robust communication between PIC18F and CR95HF (UART).',
            'Protocol Management: Implementing NFC tag detection by parsing hex-command responses.',
            'Actuator Driving: Implementing a PWM signal to control precise servo-motor angles.'
          ]
        },
        {
          title: 'Firmware & Control Logic',
          tasks: [
            'Low-Level C Development: Programming the control loop in MPLAB X, optimizing registers.',
            'Interrupt Handling: Utilizing hardware interrupts for efficient tag polling without blocking.',
            'Safety Features: Identity validation routines and temperature-based security interlock.'
          ]
        }
      ],
      tags: ['PIC18F / MPLAB X / Debugging', 'UART / NFC Protocol', 'PWM Control', 'Embedded C']
    },
    {
      meta: 'ENSEEIHT • 2025-2026',
      type: 'Digital Systems Project',
      title: 'FPGA Digital Front-End & Frequency Meter',
      description: 'Design and VHDL implementation of a high-speed digital signal processing chain on an Artix-7 FPGA. The system acquires optical "sawtooth" fringe signals to calculate frequency in real-time.',
      columns: [
        {
          title: 'Digital Signal Processing (DSP)',
          tasks: [
            'Fixed-Point Filtering: Implementation of a 1st-order High-Pass filter (10kHz cutoff).',
            'Edge Enhancement: Hardware-based derivation and dynamic thresholding for pulse signals.',
            'Data Acquisition: Interfacing native 12-bit XADC (1MHz) and external 12-bit DAC.'
          ]
        },
        {
          title: 'Logic Design & Architecture',
          tasks: [
            'VHDL Modeling: Structural and behavioral coding of mathematical operators and FSM.',
            'Frequency Measurement: High-resolution counter with 100ms refresh and 4-digit precision.',
            'Hardware Interfacing: Management of 7-segment display multiplexing and Pmod DA2.'
          ]
        }
      ],
      tags: ['VHDL / Vivado', 'Artix-7 FPGA', 'Fixed-Point DSP', 'Digital Control Logic']
    },
    {
      meta: 'ENSEEIHT • 2024-2025',
      type: 'IoT Project',
      title: 'IoT Heart Monitor Development',
      description: 'Implementation of a complete photoplethysmography (PPG) acquisition chain. Designed a custom analog front-end, digitized signals via FPGA, and performed automated diagnostics.',
      columns: [
        {
          title: 'Analog & Mixed-Signal Design',
          tasks: [
            '3-Stage Amplifier Sizing: Common Drain, Differential Pair, and Common Collector design.',
            'Analog Filtering: Rauch active filter to eliminate 50Hz noise and define bandwidth.',
            'ADC Design: Development of an 8-bit Single-Slope ADC implemented on DE1-SoC FPGA.'
          ]
        },
        {
          title: 'Digital Signal Processing & Analysis',
          tasks: [
            'Matlab Processing: Signal filtering using Savitzky-Golay (FIR) and Butterworth (IIR).',
            'Pulse Wave Velocity: Extraction of physiological parameters and heart rate calculation.',
            'Statistical Diagnosis: Neyman-Pearson tests for automated detection of tachycardia.'
          ]
        }
      ],
      tags: ['Analog Sizing', 'PSpice', 'Mixed-Signal Systems', 'FPGA', 'Quartus', 'Matlab']
    }
  ];
}
