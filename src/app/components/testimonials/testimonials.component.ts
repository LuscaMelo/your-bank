import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';

//Models
import { TestimonialsCard } from '../../models/cards.model';
import { Title } from '../../models/Title.model';

//Data
import { homeTitles, testimonialsCards } from '../../data/homeData';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ToggleButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  //Titles
  title: Title = homeTitles.testimonials

  //Testimonials Cards Data
  testimonialsCards: TestimonialsCard[] = testimonialsCards

  ngOnInit(): void {
    this.individuals = this.testimonialsCards.filter(card => card.category == 'individuals')
    this.businesses = this.testimonialsCards.filter(card => card.category == 'businesses')
    this.testimonialsList = this.individuals
  }

  individuals!: TestimonialsCard[]
  businesses!: TestimonialsCard[]
  testimonialsList!: TestimonialsCard[]


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
