import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { Title } from '../../models/Title.model';

//Data
import { howWeProtectYouCards, securityTitles } from '../../data/securityData';

@Component({
  selector: 'app-how-we-protect-you',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './how-we-protect-you.component.html',
  styleUrl: './how-we-protect-you.component.scss'
})

export class HowWeProtectYouComponent {

  //Title
  title: Title = securityTitles.howWeProtectYou

  //Cards - Our Products
  howWeProtectYouCards = howWeProtectYouCards

  //Enter Animation
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const cardContainer: any = document.getElementById('howWeProtectYouCards');
    const topDistance = cardContainer.getBoundingClientRect().top;

    if (topDistance < window.innerHeight - 350) {
      cardContainer.classList.add('opacity-100');
    }
  }
}
