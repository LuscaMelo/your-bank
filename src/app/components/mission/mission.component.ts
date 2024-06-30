import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

  //Title
  heading: any = {
    title: 'Mission &', emphasis: ' Vision', subtitle: 'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development'
  }
}
