import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { CaroselComponent } from '../../../app/component/carosel/carosel.component';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [FirstComponent, SecondComponent, ThirdComponent, CaroselComponent],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftComponent {
  @Input() items1: Array<{ title: string; image: string; _id: number }> = [];
  @Input() sliderTop: { title: string; image: string; _id: number }[] = [];
  @Input() selectedImage: { title: string; image: string; _id: number } = {
    image: '',
    _id: 0,
    title: '',
  };
  @Input() sliderMaxFive: { title: string; image: string; _id: number }[] = [];
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

  @Output() getCurrentImage = new EventEmitter<any>();

  // items: { title: string; image: string; _id: number }[] = [
  //
  // ];
  // selectedImage: { title: string; image: string; _id: number } = {
  //   image: this.items[0].image,
  //   id: this.items[0].id,
  //   title: this.items[0].title,
  // };

  handleGetCurrentImage(item: { image: string; title: string; _id: number }) {
    console.log('parent', item);
    const currentImage = {
      image: item.image,
      _id: item._id,
      title: item.title,
    };
    this.getCurrentImage.emit(currentImage);
  }
}
