import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: "Pizza",
      expended: true,
      products: [
        {id: 0, name: 'ฮาวาเอี่ยน', price: '8'},
        {id: 1, name: 'คลาสสิค', price: '5'},
        {id: 2, name: 'ทูน่า', price: '9'},
        {id: 3, name: 'ฮาวาย', price: '7'},
      ]
    },
    {
      category: "Pasta",
      products: [
        {id: 4, name: 'ชีส', price: '8'},
        {id: 5, name: 'โบโลน่า', price: '6'},
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }

}
