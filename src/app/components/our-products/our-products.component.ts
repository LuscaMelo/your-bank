import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';

//Models
import { ProductCard } from '../../models/cards.model';
import { Title } from '../../models/Title.model';

//Data
import { homeTitles, productsCards } from '../../data/homeData';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ToggleButtonComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})

export class OurProductsComponent {

  //Title
  title: Title = homeTitles.ourProducts

  //Cards Data
  productsCards: ProductCard[] = productsCards

  ngOnInit(): void {
    this.individuals = this.productsCards.filter(card => card.category == 'individuals')
    this.businesses = this.productsCards.filter(card => card.category == 'businesses')
    this.productsCardList = this.individuals
  }

  individuals!: ProductCard[]
  businesses!: ProductCard[]
  productsCardList!: ProductCard[]

  toggleCards(event: Event): void {
    this.productsCardList == this.individuals ? this.productsCardList = this.businesses : this.productsCardList = this.individuals
  }
}