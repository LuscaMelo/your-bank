import { Component } from '@angular/core';

//Components
import { OverviewComponent } from '../../components/overview/overview.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { PressReleasesComponent } from '../../components/press-releases/press-releases.component';

//Models
import { overviewData } from '../../data/aboutData';
import { Overview } from '../../models/overview.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OverviewComponent, MissionComponent, PressReleasesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  //Overview Data
  overviewData: Overview = overviewData
}
