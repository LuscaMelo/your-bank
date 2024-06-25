import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../models/button.model';

import { UseCasesComponent } from '../../components/use-cases/use-cases.component';
import { FeaturesComponent } from '../../components/features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, UseCasesComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isActive: boolean = false

  //Cards - Our Products
  individuals: any[] = [
    { icon: 'products-icon1.png', title: 'Checking Accounts', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
    { icon: 'products-icon2.png', title: 'Savings Accounts', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: true },
    { icon: 'products-icon3.png', title: 'Loans and Mortgages', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: false },
  ]

  businesses: any[] = [
    { icon: 'products-icon6.png', title: 'Savings Accounts Plus', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: false },
    { icon: 'products-icon5.png', title: 'Loans and Mortgages Plus', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: true },
    { icon: 'products-icon4.png', title: 'Checking Accounts Plus', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
  ]

  productsCardList: any = this.individuals

  //Toggle button
  buttons: Button[] = [
    { name: 'For Individuals', active: true },
    { name: 'For Businesses', active: false }
  ]

  toggle(): void {
    this.buttons.map((btn: Button) => {
      btn.active = !btn.active
    })
    this.productsCardList == this.individuals ? this.productsCardList = this.businesses : this.productsCardList = this.individuals
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