import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UseCasesComponent } from '../../components/use-cases/use-cases.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { ToggleButtonComponent } from '../../components/toggle-button/toggle-button.component';
import { OurProductsComponent } from '../../components/our-products/our-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, UseCasesComponent, FeaturesComponent, SectionTitleComponent, ToggleButtonComponent, OurProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Titles
  titles: any = {
    ourProducts: { title: 'Our', emphasis: 'Products', subtitle: 'Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations' },
    useCases: { title: 'Use', emphasis: 'Cases', subtitle: 'At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions' },
    ourFeatures: { title: 'Our', emphasis: 'Features', subtitle: 'Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience' },
  }

  //Use cases data
  individualsContent: any =
    {
      title: 'For Individuals',
      description: 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
      statistics: [
        { percentage: '78%', text: 'Secure Retirement Planning' },
        { percentage: '63%', text: 'Manageable Debt Consolidation' },
        { percentage: '91%', text: 'Reducing financial burdens' },
      ],
      direction: 'lg:flex-row',
      cards: [
        { text: 'Managing Personal Finances', icon: 'cases-icon1.png' },
        { text: 'Saving for the Future', icon: 'cases-icon2.png' },
        { text: 'Homeownership', icon: 'cases-icon3.png' },
        { text: 'Education Funding', icon: 'cases-icon4.png' },
      ],
    }

  businessesContent: any =
    {
      title: 'For Businesses',
      description: ' For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them',
      statistics: [
        { percentage: '65%', text: 'Cash Flow Management' },
        { percentage: '70%', text: 'Drive Business Expansion' },
        { percentage: '45%', text: 'Streamline payroll processing' },
      ],
      direction: 'lg:flex-row-reverse',
      cards: [
        { text: 'Startups and Entrepreneurs', icon: 'cases-icon5.png' },
        { text: 'Cash Flow Management', icon: 'cases-icon6.png' },
        { text: 'Business Expansion', icon: 'cases-icon7.png' },
        { text: 'Payment Solutions', icon: 'cases-icon8.png' },
      ],
    }
}