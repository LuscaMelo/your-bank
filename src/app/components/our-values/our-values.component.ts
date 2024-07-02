import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { OurValuesCard } from '../../models/cards.model';
import { Title } from '../../models/Title.model';

//Data
import { careersTitles, ourValuesCards } from '../../data/careersData';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.scss'
})
export class OurValuesComponent {

  //Title
  title: Title = careersTitles.ourValues

  //Cards - Our Products
  ourValuesCards: OurValuesCard[] = ourValuesCards

  //Enter Animation
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const cardContainer: any = document.getElementById('ourValuesCards');
    const topDistance = cardContainer.getBoundingClientRect().top;

    if (topDistance < window.innerHeight - 350) {
      cardContainer.classList.add('opacity-100');
    }
  }
}
