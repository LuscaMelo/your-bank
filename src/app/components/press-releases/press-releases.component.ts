import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { Title } from '../../models/Title.model';
import { releasesCard } from '../../models/cards.model';

//Data
import { aboutTitles, releasesCards } from '../../data/aboutData';

@Component({
  selector: 'app-press-releases',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './press-releases.component.html',
  styleUrl: './press-releases.component.scss'
})
export class PressReleasesComponent {

  //Title
  title: Title = aboutTitles.pressReleases

  //Releases Cards Data
  releasesCards: releasesCard[] = releasesCards
}
