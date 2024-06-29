import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { OurValuesComponent } from '../../components/our-values/our-values.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';
import { CallToAction } from '../../models/callToAction.model';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SectionTitleComponent, OverviewComponent, OurValuesComponent, BenefitsComponent, JobsComponent, FaqComponent, CallToActionComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  //Call To Action
  callToAction: CallToAction = {
    title: 'Start your Career with ',
    emphasys: 'YourBank today!',
    description: 'Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.',
  }

  //FAQ section title
  faqTitle: any = { title: 'Frequently', emphasis: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' }

}
