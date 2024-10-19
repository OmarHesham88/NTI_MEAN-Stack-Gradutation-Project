import { Component } from '@angular/core';
import { UserService } from '../abouts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  phone: string = '';
  email: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchContactDetails();
  }

  // Fetch contact details from backend
  fetchContactDetails(): void {
    this.userService.getContactDetails().subscribe({
      next: (data) => {
        this.phone = data.phone;
        this.email = data.email;
      },
      error: (err) => {
      }
    });
  }

}
