import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}
  // not working yet
  scrollToElement() {
    this.router.navigate([], { fragment: 'menu-top-sales' });
  }
  
}
