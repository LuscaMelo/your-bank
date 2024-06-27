import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { TestimonialsCard } from '../../models/cards.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ToggleButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input() props!: any

  ngOnInit(): void {
    this.individuals = this.testimonialsCards.filter(card => card.category == 'individuals')
    this.businesses = this.testimonialsCards.filter(card => card.category == 'businesses')
    this.testimonialsList = this.individuals
  }

  individuals!: TestimonialsCard[]
  businesses!: TestimonialsCard[]
  testimonialsList!: TestimonialsCard[]

  //Testimonials cards
  testimonialsCards: TestimonialsCard[] = [
    { category: 'individuals', name: 'Sara T', testimony: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.' },
    { category: 'individuals', name: 'John D', testimony: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." },
    { category: 'individuals', name: 'Emily G', testimony: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind." },
    { category: 'businesses', name: 'TechInnovate', testimony: "YourBank has been essential from the start, offering personalized banking solutions that allow us to focus on growth and innovation." },
    { category: 'businesses', name: 'EcoTech', testimony: 'YourBank understands our unique needs as a sustainable technology company, providing agile banking support and a commitment to sustainability.' },
    { category: 'businesses', name: 'FoodEx', testimony: 'Choosing YourBank was a strategic decision that helped us optimize financial operations and efficiently expand our market presence.' },
  ]

  toggleCards(event: Event): void {
    this.testimonialsList == this.individuals ? this.testimonialsList = this.businesses : this.testimonialsList = this.individuals
  }

  slideUp(): void {
    let primeiro: TestimonialsCard | undefined = this.testimonialsList.shift()
    this.testimonialsList.push(primeiro!)
  }

  slideDown(): void {
    let ultimo: TestimonialsCard | undefined = this.testimonialsList.pop()
    this.testimonialsList.unshift(ultimo!)
  }
}
