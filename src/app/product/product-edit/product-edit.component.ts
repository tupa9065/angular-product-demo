import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};
  message = '';

  constructor(private productService: ProductService,
              private activatedRote: ActivatedRoute) {
    this.activatedRote.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getProduct(id);
    });
  }

  ngOnInit() {
  }

  getProduct(id) {
    return this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(id) {
    this.productService.update(id, this.product).subscribe(() => this.message = 'success');
  }

}
