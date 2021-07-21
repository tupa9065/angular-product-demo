import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getProductBYId(id);
    });
  }

  ngOnInit() {
  }

  getProductBYId(id) {
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }
}
