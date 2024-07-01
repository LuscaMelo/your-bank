import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-press-releases',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './press-releases.component.html',
  styleUrl: './press-releases.component.scss'
})
export class PressReleasesComponent {

  //Title
  heading: any = {
    title: 'Press ', emphasis: 'Releases', subtitle: 'Stay updated with the latest happenings and exciting developments at YourBank through our press releases.'
  }
}
