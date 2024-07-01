import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { releasesCard } from '../../models/cards.model';

@Component({
  selector: 'app-press-releases',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './press-releases.component.html',
  styleUrl: './press-releases.component.scss'
})
export class PressReleasesComponent {

  //Title
  heading: any = {
    title: 'Press ', emphasis: 'Releases', subtitle: 'Stay updated with the latest happenings and exciting developments at YourBank through our press releases.'
  }

  //Releases Cards Data
  releasesCards: releasesCard[] = [
    { title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction', image: 'press-releases1.png', location: 'Brazil', date: '06/11/2024', description: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.' },
    { title: 'YourBank Expands Branch Network with Opening of New Location in Chennai', image: 'press-releases2.png', location: 'Brazil', date: '12/11/2024', description: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.' },
    { title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives', image: 'press-releases3.png', location: 'Brazil', date: '24/12/2024', description: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.' },
    { title: 'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility', image: 'press-releases4.png', location: 'Brazil', date: '28/12/2024', description: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.' },
  ]
}
