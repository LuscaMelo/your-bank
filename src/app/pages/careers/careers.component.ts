import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { OurValuesComponent } from '../../components/our-values/our-values.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [OverviewComponent, OurValuesComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
