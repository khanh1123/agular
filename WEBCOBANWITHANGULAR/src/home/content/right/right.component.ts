import { Component } from '@angular/core';
import { FirstsbComponent } from './firstsb/firstsb.component';
import { SecondsbComponent } from './secondsb/secondsb.component';
import { ThirdsbComponent } from './thirdsb/thirdsb.component';
import { FourthsbComponent } from './fourthsb/fourthsb.component';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [FirstsbComponent,SecondsbComponent,ThirdsbComponent,FourthsbComponent],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
  items3: {image:string, title: string, _id: number}[] =[
    {_id: 1, image:'../../../assets/img/img1.jpg', title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae sed sequi repellat dignissimos commodi nihil culpa voluptatum impedit repellendus! Laborum veniam doloribus quisquam, ex eveniet consectetur perspiciatis perferendis necessitatibus? Mollitia, autem? Beatae dolor eum assumenda fuga facilis quisquam, fugiat itaque molestiae. Harum aliquam doloribus recusandae, sunt hic rerum?'},
    {_id: 2, image:'../../../assets/img/img3.jpg', title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae sed sequi repellat dignissimos commodi nihil culpa voluptatum impedit repellendus! Laborum veniam doloribus quisquam, ex eveniet consectetur perspiciatis perferendis necessitatibus? Mollitia, autem? Beatae dolor eum assumenda fuga facilis quisquam, fugiat itaque molestiae. Harum aliquam doloribus recusandae, sunt hic rerum?'},
    {_id: 3, image:'../../../assets/img/img2.jpg', title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae sed sequi repellat dignissimos commodi nihil culpa voluptatum impedit repellendus! Laborum veniam doloribus quisquam, ex eveniet consectetur perspiciatis perferendis necessitatibus? Mollitia, autem? Beatae dolor eum assumenda fuga facilis quisquam, fugiat itaque molestiae. Harum aliquam doloribus recusandae, sunt hic rerum?'},
    {_id: 4, image:'../../../assets/img/img1.jpg', title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae sed sequi repellat dignissimos commodi nihil culpa voluptatum impedit repellendus! Laborum veniam doloribus quisquam, ex eveniet consectetur perspiciatis perferendis necessitatibus? Mollitia, autem? Beatae dolor eum assumenda fuga facilis quisquam, fugiat itaque molestiae. Harum aliquam doloribus recusandae, sunt hic rerum?'},
    {_id: 5, image:'../../../assets/img/img3.jpg', title:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestiae sed sequi repellat dignissimos commodi nihil culpa voluptatum impedit repellendus! Laborum veniam doloribus quisquam, ex eveniet consectetur perspiciatis perferendis necessitatibus? Mollitia, autem? Beatae dolor eum assumenda fuga facilis quisquam, fugiat itaque molestiae. Harum aliquam doloribus recusandae, sunt hic rerum?'},
  ]
}
