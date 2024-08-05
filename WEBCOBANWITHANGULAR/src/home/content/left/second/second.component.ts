import { Component,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { title } from 'node:process';
import { CaroselComponent } from '../../../../app/component/carosel/carosel.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CaroselComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SecondComponent {
  @Input() maxSlider: number = 5
  @Input() sliderMaxFive: Array<{ title: string; image: string; _id: number }> = [];
}

