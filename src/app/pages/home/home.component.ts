import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../models/button.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  buttons: Button[] = [
    { name: 'For Individuals', active: true },
    { name: 'For Businesses', active: false }
  ]

  isActive: boolean = false

  toggle(): void {
    this.buttons.map((btn: Button) => {
      btn.active = !btn.active
    })
  }

}
