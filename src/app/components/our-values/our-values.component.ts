import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { OurValuesCard } from '../../models/cards.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.scss'
})
export class OurValuesComponent {
  //Title
  heading: any = {
    title: 'Our', emphasis: 'Values', subtitle: 'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.'
  }

  //Cards - Our Products
  ourValuesCards: OurValuesCard[] = [
    { title: 'Integrity', description: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.' },
    { title: 'Customer Centricity', description: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations." },
    { title: 'Collaboration', description: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.' },
    { title: 'Innovation', description: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking." }
  ]
}
