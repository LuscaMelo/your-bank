import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { OurValuesComponent } from '../../components/our-values/our-values.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SectionTitleComponent, OverviewComponent, OurValuesComponent, BenefitsComponent, JobsComponent, FaqComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  //FAQ section title
  faqTitle: any = { title: 'Frequently', emphasis: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' }

}
