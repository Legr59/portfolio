export interface ProjectColumn {
  title: string;
  tasks: string[];
}

export interface Project {
  meta: string;
  type: string;
  title: string;
  description: string;
  columns: ProjectColumn[];
  tags: string[];
}

export const ACADEMIC_PROJECTS: Project[] = [
  {
    meta: 'SERMA Ingénierie • Summer 2026',
    type: 'Industry Internship — Aerospace',
    title: 'Embedded Test Bench for Avionics Validation',
    description: 'Design and implementation of a critical validation test bench for embedded electronic systems at SERMA Ingénierie, Aix-en-Provence. Integrated within a multidisciplinary team (system, electronics, embedded software, mechatronics engineers) to deliver a complete development cycle from specification to validation.',
    columns: [
      {
        title: 'Embedded Development & Architecture',
        tasks: [
          'Test bench architecture design and technical specification definition.',
          'Embedded C programming of the control module deployed on Raspberry Pi.',
          'CAN FD protocol integration for real-time communication with avionics systems.',
          'Definition of rigorous test scenarios for safety-critical validation.'
        ]
      },
      {
        title: 'HMI & Validation',
        tasks: [
          'Angular-based user interface development (TypeScript, HTML, SCSS).',
          'Real-time visualization of test data and results dashboard.',
          'Test execution, result analysis, and functional/safety requirements validation.',
          'Active collaboration with expert engineers in aerospace.'
        ]
      }
    ],
    tags: ['Embedded C', 'Raspberry Pi', 'CAN FD', 'Angular / TypeScript', 'Aerospace', 'Test Bench']
  },
  {
    meta: 'ENSEEIHT • 2025-2026',
    type: 'Digital Systems Project',
    title: 'FPGA 1-Wire Digital Thermometer',
    description: 'Complete design and VHDL implementation of a 1-Wire digital thermometer system on a Nexys A7 FPGA. The system implements the 1-Wire protocol to communicate with a DS18S20 temperature sensor, handling initialization (reset/presence pulse), ROM commands, temperature conversion, and data readback. Temperature is displayed in real-time on the board\'s 7-segment displays with sign handling and decimal precision.',
    columns: [
      {
        title: '1-Wire Protocol & FSM Design',
        tasks: [
          'Protocol Implementation: Full 1-Wire timing with µs-precision Init (reset/presence), Write, and Read (9-bit sampling) FSMs.',
          'Master Orchestrator: Top-level FSM sequencing Skip ROM, Convert T, 800ms conversion wait, and Read Scratchpad commands via internal ROM.',
          'Error Handling: Robust timeout detection, presence pulse validation (15–60 µs window), and automatic recovery state machine.'
        ]
      },
      {
        title: 'Hardware Architecture & Verification',
        tasks: [
          'Modular Hierarchy: 12 VHDL modules organized in top-down layers (utilities, protocol, orchestration, display) with clean signal interfaces.',
          'Metastability Protection: Double flip-flop resynchronizer and synchronous reset generator for reliable external signal handling.',
          'BCD Display Engine: Double Dabble binary-to-BCD converter with multiplexed 7-segment output, zero blanking, sign display, and decimal point.'
        ]
      }
    ],
    tags: ['VHDL / Vivado', 'Artix-7 FPGA', '1-Wire Protocol', 'FSM Design', 'Synchronous Design', 'DS18S20']
  },
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
    tags: ['PIC18F / MPLAB X / Debugging', 'UART Protocol', 'PWM Control', 'Embedded C']
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
