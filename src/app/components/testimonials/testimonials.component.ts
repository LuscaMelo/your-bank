import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ToggleButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input() props: any

  //Testimonials data
  testimonials: any = [
    { name: 'Sara T', text: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.' },
    { name: 'John D', text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." },
    { name: 'Emily G', text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind." },
  ]

  toggleCards(event: Event): void {
  }

  slideUp(): void {
    let primeiro: any = this.testimonials.shift()
    this.testimonials.push(primeiro)
  }

  slideDown(): void {
    let ultimo: any = this.testimonials.pop()
    this.testimonials.unshift(ultimo)
  }
}
