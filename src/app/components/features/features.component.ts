import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from '../../models/button.model';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  @Input() props: any

  //Features Buttons
  featuresButtons: Button[] = [
    { name: 'Online Banking', active: true },
    { name: 'Financial Tools', active: false },
    { name: 'Customer Support', active: false }
  ]

  changeFeatures(buttonClicked: string): void {
    this.featuresButtons.map((btn: Button) => {
      btn.name == buttonClicked ? btn.active = true : btn.active = false
    })
  }

}
