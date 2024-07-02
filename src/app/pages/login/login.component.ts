import { Component } from '@angular/core';

//Components
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
}
