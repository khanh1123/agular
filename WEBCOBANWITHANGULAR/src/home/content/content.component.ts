import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CaroselComponent } from '../../app/component/carosel/carosel.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LeftComponent, RightComponent, CaroselComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentComponent {
  @Input() sliderTop: { title: string; image: string; _id: number }[] = [];
  @Input() selectedImage: { title: string; image: string; _id: number } = {
    image: '',
    _id: 0,
    title: '',
  };
  @Input() sliderMaxFive: { title: string; image: string; _id: number }[] = [];
  @Input() sliderMaxSix: { title: string; image: string; _id: number }[] = [];
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

  @Output() handleGetCurrent = new EventEmitter<any>();

  isTitle: boolean = false;

  handleGetCurrentImage(item: { image: string; title: string; _id: number }) {
    this.handleGetCurrent.emit(item);
  }
  @Input() items1: Array<{ title: string; image: string; _id: number }> = [];
}
