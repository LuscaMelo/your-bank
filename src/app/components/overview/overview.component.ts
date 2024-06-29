import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  @Input() overviewData: any
}
