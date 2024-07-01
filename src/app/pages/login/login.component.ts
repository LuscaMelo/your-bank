import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, TestimonialsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Title
  heading: any = {
    title: 'Mission &', emphasis: ' Vision', subtitle: 'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development'
  }
}
