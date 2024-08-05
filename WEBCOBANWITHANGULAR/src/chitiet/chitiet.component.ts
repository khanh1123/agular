import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';
import { RightComponent } from '../home/content/right/right.component';
import { FooterComponent } from '../home/footer/footer.component';
import axios from 'axios';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-chitiet',
  standalone: true,
  templateUrl: './chitiet.component.html',
  styleUrl: './chitiet.component.css',
  imports: [HeaderComponent, RightComponent, FooterComponent],
})
export class ChitietComponent implements OnInit {
    constructor(private router: Router) {}
    id: string = ''
    data: {
        image: string,
        content: string,
        title: string,
    } = {
      content: '',
      title: '',
      image: ''
    }
  async ngOnInit(): Promise<void> {
    // localhost:4200/chitiet/668caf72cfc2728067bfa1e9
    // this.router.url => '/chitiet/668caf72cfc2728067bfa1e9'
    // split('/') => ['', 'chitiet', '668caf72cfc2728067bfa1e9']
    // this.router.url.split('/')[2] => 668caf72cfc2728067bfa1e9
    this.id = this.router.url.split('/')[2]
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news/detail?id=${this.id}`,
      });
      console.log(response);
      if (response.status === 200) {
        this.data = response.data.data
      }
      
    } catch (err) {
      console.log(err);
    }
  }
}
