import { Component } from '@angular/core';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupFormComponent, TestimonialsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  //Title
  heading: any = {
    title: 'Mission &', emphasis: ' Vision', subtitle: 'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development'
  }
}
