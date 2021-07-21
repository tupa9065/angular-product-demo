import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};
  message = '';
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });
  isSubmitted: boolean = false;

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
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      });
    });
  }

  updateProduct(id) {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      this.productService.update(id, this.product).subscribe(() => this.message = 'update success');
      this.isSubmitted = false;
    } else {
      this.message = 'data invalid'
    }
  }

}
