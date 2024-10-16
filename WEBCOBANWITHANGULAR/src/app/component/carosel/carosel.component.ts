import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carosel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carosel.component.html',
  styleUrl: './carosel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaroselComponent {
  @Input() maxSlider = 5
  @Input() items1: Array<{ title: string; image: string; _id: number }> = [];
  @Input() isTitle: boolean = true
  
}
