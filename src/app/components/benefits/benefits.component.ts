import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { BenefitsCard } from '../../models/cards.model';
import { Title } from '../../models/Title.model';

//Data
import { benefitsCards, careersTitles } from '../../data/careersData';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  //Title
  title: Title = careersTitles.ourBenefits

  //Cards - Our Products
  benefitsCards: BenefitsCard[] = benefitsCards

  //Enter Animation
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const cardContainer: any = document.getElementById('ourBenefitsCards');
    const topDistance = cardContainer.getBoundingClientRect().top;

    if (topDistance < window.innerHeight - 350) {
      cardContainer.classList.add('opacity-100');
    }
  }
}
