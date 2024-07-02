import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

//Model
import { UseCasesData } from '../../models/useCases.model';

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss'
})
export class UseCasesComponent {
  @Input() useCasesData!: UseCasesData
}

