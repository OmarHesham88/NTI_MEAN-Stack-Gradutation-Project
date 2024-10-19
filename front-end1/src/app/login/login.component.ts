import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../abouts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login(): void {
    if (this.userService.authenticate(this.username, this.password)) {
      this.router.navigate(['/about']);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

}
