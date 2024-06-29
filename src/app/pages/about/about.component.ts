import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  //Overview Data
  overviewData: any = {
    title: 'Where Banking Meets ',
    emphasys: 'Excellence!',
    description: 'At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.',
    image: 'overview-about.png'
  }
}
