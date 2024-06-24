import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './use-cases.component.html',
  styleUrl: './use-cases.component.scss'
})
export class UseCasesComponent {

  @Input() whichDirection: string = ''
  direction: boolean = true

  //Cards - Use Cases
  useCaseIndividuals: any = [
    { title: 'Managing Personal Finances', icon: 'cases-icon1.png' },
    { title: 'Saving for the Future', icon: 'cases-icon2.png' },
    { title: 'Homeownership', icon: 'cases-icon3.png' },
    { title: 'Education Funding', icon: 'cases-icon4.png' },
  ]

  useCaseBusinesses: any = [
    { title: 'Managing Personal Finances', icon: 'cases-icon1.png' },
    { title: 'Saving for the Future', icon: 'cases-icon1.png' },
    { title: 'Homeownership', icon: 'cases-icon1.png' },
    { title: 'Education Funding', icon: 'cases-icon1.png' },
  ]

}
