import { Component } from '@angular/core';

//Components
import { OverviewComponent } from '../../components/overview/overview.component';
import { HowWeProtectYouComponent } from '../../components/how-we-protect-you/how-we-protect-you.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { FaqComponent } from '../../components/faq/faq.component';

//Model
import { Overview } from '../../models/overview.model';

//Data
import { overviewData } from '../../data/securityData';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [OverviewComponent, HowWeProtectYouComponent, SectionTitleComponent, FaqComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {

  //Overview Data
  overviewData: Overview = overviewData
}
