import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
