import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @Output()
  addEvent = new EventEmitter<Product>();

  product: Product = {};
  constructor() { }

  ngOnInit() {
  }
  createProduct() {
    const newProduct: Product = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      description: this.product.description
    };
    this.addEvent.emit(newProduct);
  }

}
