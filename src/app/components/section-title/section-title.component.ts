import { Component, Input } from '@angular/core';

//Model
import { Title } from '../../models/Title.model';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})

export class SectionTitleComponent {
  @Input() sectionTitle!: Title
}
