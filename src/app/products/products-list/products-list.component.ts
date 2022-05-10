import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Product.interface';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  products:IProduct[]=[];
  constructor(private productService:ProductsServiceService) { }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList():void
  {
   this.products=  this.productService.getProducts();
   console.log(this.products);

  }


}
