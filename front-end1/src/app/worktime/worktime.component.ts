import { Component } from '@angular/core';
import { UserService } from '../abouts.service';

@Component({
  selector: 'app-worktime',
  templateUrl: './worktime.component.html',
  styleUrl: './worktime.component.css'
})
export class WorktimeComponent {
  worktime1: string = " ";
  worktime2: string = " ";

  constructor(private UserService: UserService) {}
  ngOnInit(): void {
    this.fetchWorkTimeDetails();
  }

  fetchWorkTimeDetails(): void {
    this.UserService.getWorkTimeDetails().subscribe({
      next: (data) => {
        this.worktime1 = data.worktime1;
        this.worktime2 = data.worktime2;
      },
      error: (err) => {
      }
    });
  }
}
