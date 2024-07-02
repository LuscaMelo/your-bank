import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Components
import { SectionTitleComponent } from '../section-title/section-title.component';

//Model
import { FaqCard } from '../../models/cards.model';

//Data
import { faqCards, homeTitles } from '../../data/homeData';
import { Title } from '../../models/Title.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  //Titles
  title: Title = homeTitles.faq

  //FAQ Cards Data 
  faqCards = faqCards

  ngOnInit(): void {
    this.filteredFaqList = this.faqCards.filter((card: FaqCard) => card.id == 'show')
    this.faqList = this.filteredFaqList
  }

  faqList!: FaqCard[]
  filteredFaqList!: FaqCard[]

  btnActive: boolean = false

  showAllCards(): void {
    this.faqList == this.filteredFaqList ? this.faqList = this.faqCards : this.faqList = this.filteredFaqList
    this.btnActive = !this.btnActive
  }

}
