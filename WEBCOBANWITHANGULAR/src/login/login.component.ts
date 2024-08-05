import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  usernameError: string = '';
  passwordError: string = '';
  constructor(private router: Router) {}

  onLogin() {
    this.usernameError = '';
    this.passwordError = '';

    let isValid = true;

    if (!this.username) {
      this.usernameError = 'Bạn cần điền thông tin vào: Tên đăng nhập!';
      isValid = false;
    }
    if (!this.password) {
      this.passwordError = 'Bạn cần điền thông tin vào: Mật khẩu!';
      isValid = false;
    }

    if(isValid) {
      this.getPOST()
    }
  }

  

  async getPOST() {
    try {
      const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/login',
      data: {
        username: this.username,
        password: this.password
      }
      });
      console.log(response);
      if (response.data.statusCode === 200) {
        this.router.navigate(['/']);
      }
    }
    
    catch (err) {
      console.log(err);
      
    }
  }
}
