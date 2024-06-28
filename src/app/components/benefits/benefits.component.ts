import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { CommonModule } from '@angular/common';
import { BenefitsCard } from '../../models/cards.model';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  //Title
  heading: any = {
    title: 'Our', emphasis: 'Benefits', subtitle: 'At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth'
  }

  //Cards - Our Products
  benefitsCards: BenefitsCard[] = [
    { title: 'Competitive Compensation', description: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.' },
    { title: 'Health and Wellness', description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle." },
    { title: 'Retirement Planning', description: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.' },
    { title: 'Work-Life Balance', description: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments." }
  ]
}
