import { Component } from '@angular/core';

//Components
import { OverviewComponent } from '../../components/overview/overview.component';
import { OurValuesComponent } from '../../components/our-values/our-values.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

//Models
import { callToAction, careersTitles, overviewData } from '../../data/careersData';
import { Overview } from '../../models/overview.model';
import { CallToAction } from '../../models/callToAction.model';
import { Title } from '../../models/Title.model';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SectionTitleComponent, OverviewComponent, OurValuesComponent, BenefitsComponent, JobsComponent, FaqComponent, CallToActionComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  //Overview Data
  overviewData: Overview = overviewData

  //Call To Action
  callToAction: CallToAction = callToAction

  //Titles
  titles: Title[] = careersTitles

}
