import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondsb',
  standalone: true,
  imports: [],
  templateUrl: './secondsb.component.html',
  styleUrl: './secondsb.component.css'
})
export class SecondsbComponent {
  @Input() items3: Array<{ title: string; image: string; _id: number }> = [];
}
