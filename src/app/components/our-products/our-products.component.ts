import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { ProductCard } from '../../models/cards.model';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ToggleButtonComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {

  @Input() props: any

  ngOnInit(): void {
    this.individuals = this.productsCards.filter(card => card.category == 'individuals')
    this.businesses = this.productsCards.filter(card => card.category == 'businesses')
    this.productsCardList = this.individuals
  }

  individuals!: ProductCard[]
  businesses!: ProductCard[]
  productsCardList!: ProductCard[]

  //Cards - Our Products
  productsCards: ProductCard[] = [
    { category: 'individuals', icon: 'products-icon1.png', title: 'Checking Accounts', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
    { category: 'individuals', icon: 'products-icon2.png', title: 'Savings Accounts', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: true },
    { category: 'individuals', icon: 'products-icon3.png', title: 'Loans and Mortgages', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: false },
    { category: 'businesses', icon: 'products-icon6.png', title: 'Savings Accounts Plus', text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", border: false },
    { category: 'businesses', icon: 'products-icon5.png', title: 'Loans and Mortgages Plus', text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.', border: true },
    { category: 'businesses', icon: 'products-icon4.png', title: 'Checking Accounts Plus', text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.', border: false },
  ]

  toggleCards(event: Event): void {
    this.productsCardList == this.individuals ? this.productsCardList = this.businesses : this.productsCardList = this.individuals
  }
}