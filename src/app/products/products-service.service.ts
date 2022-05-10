import { Injectable } from '@angular/core';
import { IProduct } from './Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  products:IProduct[]= [
  {_id:1,name:'water',type:'drinks',qty:10,price:1},
  {_id:2,name:'Coffee',type:'drinks',qty:10,price:2},
  {_id:3,name:'chicken',type:'food',qty:10,price:12},
  {_id:4,name:'Coffee',type:'drinks',qty:10,price:2},
  {_id:5,name:'Coffee',type:'drinks',qty:10,price:2},
  ]
  
  constructor() { }


  getProducts():IProduct[]
  {
    return this.products;

  }
}
