import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

//Model
import { CallToAction } from '../../models/callToAction.model';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {
  @Input() callToAction!: CallToAction
}
