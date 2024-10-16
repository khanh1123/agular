import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-largenews',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './largenews.component.html',
  styleUrl: './largenews.component.css',
})
export class LargenewsComponent {
  @Input() data: {
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  } = {
    title: '',
    image: '',
    _id: 0,
    author: '',
    createDate: '',
  };
  @Input() title: string = 'Tin tức mới'
item: any;
}
