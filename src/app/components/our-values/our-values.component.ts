import { Component } from '@angular/core';
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
}
