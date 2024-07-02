import { Component, HostListener } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Model
import { Title } from '../../models/Title.model';

//Data
import { aboutTitles } from '../../data/aboutData';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

  //Title
  title: Title = aboutTitles.mission

  //Enter Animation
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const cardContainer: any = document.getElementById('missionCards');
    const topDistance = cardContainer.getBoundingClientRect().top;

    if (topDistance < window.innerHeight - 350) {
      cardContainer.classList.add('opacity-100');
    }
  }
}
