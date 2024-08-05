import { Component, Input } from '@angular/core';
import { LargenewsComponent } from '../../../../app/component/largenews/largenews.component';
import { SmallnewsComponent } from '../../../../app/component/smallnews/smallnews.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [LargenewsComponent, SmallnewsComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent {
  @Input() news: {
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  }[] = [];
  @Input() events: {
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  }[] = [];

  title: string = "Sự kiện"
}
