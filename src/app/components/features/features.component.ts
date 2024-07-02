import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { Button } from '../../models/button.model';
import { FeaturesCard } from '../../models/cards.model';

//Data
import { featuresCards, homeTitles } from '../../data/homeData';
import { Title } from '../../models/Title.model';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeaturesComponent, SectionTitleComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  //Title
  title: Title = homeTitles.ourFeatures

  //Features Data
  featuresCards = featuresCards

  ngOnInit(): void {
    this.featuresList = this.featuresCards.filter((card: FeaturesCard) => card.category == 'Online Banking')
  }

  filteredCards!: FeaturesCard[]
  featuresList!: FeaturesCard[]

  //Features Buttons
  featuresButtons: Button[] = [
    { name: 'Online Banking', active: true },
    { name: 'Financial Tools', active: false },
    { name: 'Customer Support', active: false }
  ]

  changeFeatures(buttonClicked: string): void {
    this.featuresButtons.map((btn: Button) => {
      btn.name == buttonClicked ? btn.active = true : btn.active = false
    })

    this.featuresList = this.featuresCards.filter((card: FeaturesCard) => card.category == buttonClicked)
  }

  //Enter Animation
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const cardContainer: any = document.getElementById('featuresCards');
    const topDistance = cardContainer.getBoundingClientRect().top;

    if (topDistance < window.innerHeight - 400) {
      cardContainer.classList.add('opacity-100');
      cardContainer.classList.add('translate-x-0');
    }
  }

}
