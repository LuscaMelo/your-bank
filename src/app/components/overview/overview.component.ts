import { Component, Input } from '@angular/core';
import { Overview } from '../../models/overview.model';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  @Input() overviewData!: Overview
}
