import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from '../../models/button.model';
import { FeaturesCard } from '../../models/cards.model';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  ngOnInit(): void {
    this.featuresList = this.featuresCards.filter((card: any) => card.category == 'Online Banking')
  }

  filteredCards!: FeaturesCard[]
  featuresList!: FeaturesCard[]

  //Features data
  featuresCards: FeaturesCard[] = [
    { category: 'Online Banking', title: '24/7 Account Access', description: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.' },
    { category: 'Online Banking', title: 'Mobile Banking App', description: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.' },
    { category: 'Online Banking', title: 'Secure Transactions', description: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.' },
    { category: 'Online Banking', title: 'Bill Pay and Transfers', description: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.' },
    { category: 'Financial Tools', title: 'Accounting Software', description: 'While certain accounting software platforms have been considered top-of-the-line for many years, now newer software options are also becoming more popular. Before choosing accounting software for your company, look for features important to your business.' },
    { category: 'Financial Tools', title: 'Expense Tracking', description: "When my employees are on the go, they often have different expenses that will need to be reimbursed – meals and mileage, for example. Monitoring such expenses is part of some accounting software, but not all, so look for a program that integrates with your accounting software if the feature isn't already present." },
    { category: 'Financial Tools', title: 'Budgeting Tools', description: "One of the crucial ways a business can be successful is to maintain careful budgeting. Knowing what money is coming in and going out makes it easier to manage your cash flow and plan for upcoming months." },
    { category: 'Customer Support', title: 'Chatbot', description: "Have unlimited access to our chatbot on our mobile app, to answer any questions you may have regarding your plan." },
    { category: 'Customer Support', title: 'Real-time chat', description: "If by chance you can't resolve it with the chatbot, don't worry, we provide a channel so you can talk to our representatives and get any questions answered." },
  ]

  //Features Buttons
  featuresButtons: Button[] = [
    { name: 'Online Banking', active: true },
    { name: 'Financial Tools', active: false },
    { name: 'Customer Support', active: false }
  ]

  changeFeatures(buttonClicked: string): void {
    this.featuresButtons.map((btn: Button) => {
      btn.name == buttonClicked ? btn.active = true : btn.active = false
    })

    this.featuresList = this.featuresCards.filter((card: FeaturesCard) => card.category == buttonClicked)
  }

}
