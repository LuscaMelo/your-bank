import { Component } from '@angular/core';

//Components
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupFormComponent, TestimonialsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
}
