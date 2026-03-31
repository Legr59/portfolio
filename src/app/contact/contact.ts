import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  formspreeId = 'xojpwbgp';
  formspreeUrl = `https://formspree.io/f/${this.formspreeId}`;

  contactItems = [
    { icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', label: 'Email', value: 'legranmar@gmail.com' },
    { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', label: 'Location', value: 'Toulouse, France' },
    { icon: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z', label: 'Phone', value: '+33 6 79 94 09 04' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.errorMessage = '';

    try {
      const response = await fetch(this.formspreeUrl, {
        method: 'POST',
        body: JSON.stringify(this.contactForm.value),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        this.isSuccess = true;
        this.contactForm.reset();
      } else {
        this.errorMessage = "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
      }
    } catch (error) {
      this.errorMessage = "Impossible d'envoyer le message. Vérifiez votre connexion.";
    } finally {
      this.isSubmitting = false;
    }
  }
}
