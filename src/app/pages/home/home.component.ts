import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//Components
import { UseCasesComponent } from '../../components/use-cases/use-cases.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { ToggleButtonComponent } from '../../components/toggle-button/toggle-button.component';
import { OurProductsComponent } from '../../components/our-products/our-products.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { CallToAction } from '../../models/callToAction.model';

//Data
import { homeTitles, individualsContent, businessesContent, callToAction } from '../../data/homeData'

//Models
import { UseCasesData } from '../../models/useCases.model';
import { Title } from '../../models/Title.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, UseCasesComponent, FeaturesComponent, SectionTitleComponent, ToggleButtonComponent, OurProductsComponent, FaqComponent, TestimonialsComponent, CallToActionComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Title
  UseCasesTitle: Title = homeTitles.useCases

  //Use cases data
  individualsContent: UseCasesData = individualsContent
  businessesContent: UseCasesData = businessesContent

  //Call To Action
  callToAction: CallToAction = callToAction
}