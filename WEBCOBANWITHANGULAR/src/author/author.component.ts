import { Component } from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

}
