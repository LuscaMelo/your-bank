import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  buttons: any = [
    { name: 'For Individuals', active: true },
    { name: 'For Businesses', active: false }
  ]

  isActive: boolean = false

  toggle(btnName: string): void {
    this.buttons.map((btn: any) => {
      btn.active = !btn.active
    })
  }

}
