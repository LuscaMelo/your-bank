import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

//Model
import { Button } from '../../models/button.model';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {

  @Output() toggleButton = new EventEmitter();

  //Toggle button
  buttons: Button[] = [
    { name: 'For Individuals', active: true },
    { name: 'For Businesses', active: false }
  ]

  toggle(): void {
    this.buttons.map((btn: Button) => {
      btn.active = !btn.active
    })

    this.toggleButton.emit()
  }
}
