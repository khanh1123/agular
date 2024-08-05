import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-smallnews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smallnews.component.html',
  styleUrl: './smallnews.component.css',
})
export class SmallnewsComponent {
  @Input() items2: Array<{
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  }> = [];
}
