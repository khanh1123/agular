import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  sliderTop: { title: string; image: string; _id: number }[] = [];
  selectCurrentImage: { title: string; image: string; _id: number } = {
    title: '',
    image: '',
    _id: 0,
  };
  sliderMaxFive: { title: string; image: string; _id: number }[] = [];
  sliderMaxSix: { title: string; image: string; _id: number }[] = [];
  news: {
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  }[] = [];
  events: {
    title: string;
    image: string;
    _id: number;
    author: string;
    createDate: string;
  }[] = [];

  getCurrentImage(item: any): any {
    this.selectCurrentImage = item;
  }

  async handleGetTopSlider() {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news/top-slider`,
      });
      this.sliderTop = response.data.data;
      this.selectCurrentImage = response.data.data[0];
    } catch (err) {
      console.log(err);
    }
  }

  async handleGetMaxFive() {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news/max-five`,
      });
      this.sliderMaxFive = response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async handleGetMaxSix() {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news/max-six`,
      });
      this.sliderMaxSix = response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async handleGetNews() {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news?pageIndex=0&pageSize=5&type=1`,
      });
      this.news = response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async handleGetEvent() {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/news?pageIndex=0&pageSize=5&type=2`,
      });
      this.events = response.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this.handleGetTopSlider();
    this.handleGetMaxFive();
    this.handleGetMaxSix();
    this.handleGetNews();
    this.handleGetEvent()
  }
}
