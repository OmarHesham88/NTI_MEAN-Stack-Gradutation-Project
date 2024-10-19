import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, landingImages } from './myInterfaces.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticated = false;
  private productsApiURL = 'http://localhost:3000/mainproducts';
  private landingImagesApiUrl = 'http://localhost:3000/landingimages';
  private baseUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {}
  login(): void {
    this.isAuthenticated = true;
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  authenticate(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.productsApiURL, product);
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsApiURL);
  }
  updateProduct(id: number, product: Products): Observable<Products> {
      return this.http.put<Products>(`${this.productsApiURL}/${id}`, product);
  }
  
  deleteProduct(id: number): Observable<void> {
      return this.http.delete<void>(`${this.productsApiURL}/${id}`);
  }

  addLandingImage(landingImage: landingImages): Observable<landingImages> {
    return this.http.post<landingImages>(this.landingImagesApiUrl, landingImage);
  }

  getLandingImages(): Observable<landingImages[]> {
    return this.http.get<landingImages[]>(this.landingImagesApiUrl);
  }

  deleteAllLandingImages(): Observable<any> {
    return this.http.delete(`${this.landingImagesApiUrl}`);
  }



  saveContactDetails(phone: string, email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, { phone, email });
  }

  saveWorkTime(worktime1: string, worktime2: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/worktime`, { worktime1, worktime2 });
  }


  getContactDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contact`);
  }
  getWorkTimeDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contact`);
  }
}
