import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    }, error => console.log(error));
  }

  delete(id: number) {
    const isOK = confirm('are you sure to delete ');
    if (isOK) {
      this.productService.delete(id).subscribe(() => {
        this.getAllProduct();
      });
    }
  }
}
