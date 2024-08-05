import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // For template-driven forms
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterComponent {
  password: String = '';
  confirmPassword: String = '';
  username: String = '';
  email: String = '';
  fullName: string = '';
  phone: string = '';
  address: string = '';
  birthday: string = '';

  usernameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';


  // router: any;;
  constructor(private router: Router) {}

  onRegister() {
    this.usernameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';

    let isValid = true;

    if (!this.username) {
      this.usernameError = 'Bạn cần điền thông tin vào: Username!';
      isValid = false;
    }
    if (!this.email) {
      this.emailError = 'Bạn cần điền thông tin vào: Email!';
      isValid = false;
    } else if (!this.email.includes('@gmail.com')) {
      this.emailError = 'Email phải có định dạng @gmail.com!';
      isValid = false;
    }
    if (!this.password) {
      this.passwordError = 'Bạn cần điền thông tin vào: Password!';
      isValid = false;
    } else if (this.password.length < 8) {
      this.passwordError = 'Mật khẩu phải có ít nhất 8 ký tự!';
      isValid = false;
    } else if (!this.confirmPassword) {
      this.confirmPasswordError = 'Bạn cần xác nhận lại mật khẩu đã nhập trước đó!';
    } else if (this.password !== this.confirmPassword) {
      this.confirmPasswordError =
        'Xác nhận mật khẩu chưa trùng khớp với mật khẩu trước đó!';
      return;
    } else if (isValid) {
      this.handleSubmit();
    }
  }

  async handleSubmit() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/register',
        data: {
          username: this.username,
          email: this.email,
          fullName: this.fullName,
          phone: this.phone,
          address: this.address,
          password: this.password,
          birthday: this.birthday,
        },
      });
      console.log(response);
      if (response.data.statusCode === 200) {
        this.router.navigate(['/login']);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
