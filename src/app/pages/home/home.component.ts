import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../models/button.model';

import { UseCasesComponent } from '../../components/use-cases/use-cases.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, UseCasesComponent],
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

  //Boggle button
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


}