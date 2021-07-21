import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  isSubmitted = false;
  message = "";
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  createProduct(createForm) {
    this.isSubmitted = true;
    if(createForm.valid){
      this.productService.save(createForm.value).subscribe(() => {
        this.message = " create success";
        this.product = {};
        this.isSubmitted = false;
      },() =>  this.message = "create failed");
    }else {
      this.message = " data invalidate"
    }

  }

}
