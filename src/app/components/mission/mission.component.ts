import { Component } from '@angular/core';

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
}
