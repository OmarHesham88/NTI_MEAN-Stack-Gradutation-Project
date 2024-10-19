import { Component, OnInit } from '@angular/core';
import { UserService } from '../abouts.service';
import { Products, landingImages } from '../myInterfaces.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] 
})
export class AboutComponent implements OnInit {
  productName: string = '';    
  productPrice: number = 0;   
  productCalories: number = 0;
  imageSrc: string | ArrayBuffer | null = null; 
  landingImagesArray: string[] = ['', '', '', '', '']; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }


  // Add landing images
  addLandingImages(): void {
    const landingImagesToAdd: landingImages[] = this.landingImagesArray.map(src => ({ src }));

    for (const landingImage of landingImagesToAdd) {
      this.userService.addLandingImage(landingImage).subscribe(
        (response) => {
        },
        (error) => {
        }
      );
    }

    this.resetLandingImages();
  }

  resetLandingImages(): void {
    this.landingImagesArray = ['', '', '', '', ''];
  }


  resetForm(): void {
    this.productName = '';
    this.productPrice = 0;
    this.productCalories = 0;
    this.imageSrc = null;
  }

  deleteAllLandingImages(): void {
    this.userService.deleteAllLandingImages().subscribe(
      (response) => {
      },
      (error) => {
      }
    );
  }

  phone: string = '';
  email: string = '';
  worktime1: string = '';
  worktime2: string = '';

  updateContactDetails() {
    this.userService.saveContactDetails(this.phone, this.email).subscribe({
      next: (response) => {
        console.log('Contact details updated successfully', response);
      },
      error: (err) => {
      }
    });
  }

  updateWorkTime() {
    this.userService.saveWorkTime(this.worktime1, this.worktime2).subscribe({
      next: (response) => {
      },
      error: (err) => {
      }
    });
  }


  products: Products[] = [];
  selectedProduct: Products | null = null;
  newProduct: Products = { name: '', src: '', price: 0, calories: 0 };

  fetchProducts(): void {
    this.userService.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log('Fetched products:', products);  // Log the products
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
  

  selectProduct(product: Products): void {
    this.selectedProduct = { ...product }; // Clone the product for editing
  }

  updateProduct(): void {
    if (this.selectedProduct && this.selectedProduct._id !== undefined) {
      this.userService.updateProduct(this.selectedProduct._id, this.selectedProduct).subscribe(
        () => {
          this.fetchProducts();  // Refresh the product list after a successful update
          this.selectedProduct = null;  // Clear the selected product after updating
        },
        (error) => {
          console.error('Error updating product', error);
        }
      );
    } else {
      console.error('Cannot update product: Invalid product or missing _id');
    }
  }
  

  deleteProduct(id: number | undefined): void {
    if (id !== undefined) {
      this.products = this.products.filter(product => product._id !== id);
  
      this.userService.deleteProduct(id).subscribe(
        () => {
        },
        (error) => {
        }
      );
    } else {
    }
  }
  
  
  

  addProduct(): void {
    const productToAdd: Products = {
      _id: undefined,  // This ensures that the backend generates the _id
      name: this.newProduct.name,
      src: this.newProduct.src,
      price: this.newProduct.price,
      calories: this.newProduct.calories
    };
  
    this.userService.addProduct(productToAdd).subscribe(
      (data: Products) => {
        this.products.push(data); 
        this.resetForm();
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
  
  

    onImageSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
    
      if (input.files && input.files[0]) {
        const file = input.files[0];
    
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          const img = new Image();
          img.src = e.target.result;
    
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            if (ctx) {
              // Set the canvas dimensions
              const MAX_WIDTH = 800;
              const MAX_HEIGHT = 800; 
              let width = img.width;
              let height = img.height;
    
               if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
    
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
    
              const base64Image = canvas.toDataURL('image/jpeg', 0.7);
              this.selectedProduct!.src = base64Image;
            }
          };
        };
        reader.readAsDataURL(file);
      }
    }
    
    
    onImageSelected1(event: Event): void {
      const input = event.target as HTMLInputElement;
    
      if (input.files && input.files[0]) {
        const file = input.files[0];
    
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          const img = new Image();
          img.src = e.target.result;
    
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            if (ctx) {
              const MAX_WIDTH = 800;
              const MAX_HEIGHT = 800; 
              let width = img.width;
              let height = img.height;
    
               if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
    
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
    
              const base64Image = canvas.toDataURL('image/jpeg', 0.7);
              this.newProduct!.src = base64Image;
            }
          };
        };
        reader.readAsDataURL(file);
      }
    
}
}
