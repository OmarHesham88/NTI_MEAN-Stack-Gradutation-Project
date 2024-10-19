import { Component, OnInit } from '@angular/core';
import { UserService } from '../abouts.service';
import { Products } from '../myInterfaces.model';
import { landingImages } from '../myInterfaces.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']  
})

export class MainComponent implements OnInit {
  products: Products[] = [];
  landingImages: landingImages[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchLandingImages(); 
  }

  fetchProducts(): void {
    this.userService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
      },
    });
  }

  fetchLandingImages(): void {
    this.userService.getLandingImages().subscribe({
      next: (data) => {
        this.landingImages = data;
      },
      error: (error) => {
      },
    });
  }
}
