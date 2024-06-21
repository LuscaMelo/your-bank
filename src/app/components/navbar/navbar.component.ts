import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {
  menuHidden: boolean = true

  openMenu(): void {
    this.menuHidden = false
    document.body.classList.add("overflow-hidden");
  }

  closeMenu(): void {
    this.menuHidden = true
    document.body.classList.remove("overflow-hidden");
  }
}
