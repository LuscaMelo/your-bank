import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Models
import { JobsCard } from '../../models/cards.model';
import { Title } from '../../models/Title.model';

//Data
import { careersTitles, jobsCards } from '../../data/careersData';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  //Title
  title: Title = careersTitles.jobsOpening

  //Cards - Jobs Openings
  jobsCards: JobsCard[] = jobsCards
}