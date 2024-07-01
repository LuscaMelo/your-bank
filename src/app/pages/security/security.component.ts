import { Component } from '@angular/core';
import { Overview } from '../../models/overview.model';
import { OverviewComponent } from '../../components/overview/overview.component';
import { HowWeProtectYouComponent } from '../../components/how-we-protect-you/how-we-protect-you.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [OverviewComponent, HowWeProtectYouComponent, SectionTitleComponent, FaqComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {

  //Overview Data
  overviewData: Overview = {
    title: 'Your Security is Our ',
    emphasys: 'Top Priority!',
    description: 'At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.',
    image: 'overview-security.png'
  }

  //FAQ section title
  faqTitle: any = { title: 'Frequently', emphasis: 'Asked Questions', subtitle: 'Still you have any questions? Contact our Team via support@yourbank.com' }

}
