import { Component} from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
items1: any;
}
