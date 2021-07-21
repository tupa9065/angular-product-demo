import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {environment} from '../environments/environment';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + '/products/' + id);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(`${API_URL}/products`, product);
  }
  update(id: number, product: Product): Observable<Product> {
    return this.http.put(`${API_URL}/products/${id}`, product);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/products/${id}`);
  }
}
