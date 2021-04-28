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
        {id: 0, name: 'ฮาวาเอี่ยน', price: '299', img: 'https://cdn.1112.com/1112/public/images/products/pizza/August2020/199203_2.png'},
        {id: 1, name: 'แฮมและปูอัด', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/itm102226.jpg'},
        {id: 2, name: 'อะโลฮ่า', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/itm1022261.jpg'},
        {id: 3, name: 'แฮมและเห็ด', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b981e0b8aee0b8a1e0b981e0b8a5e0b8b0e0b980e0b8abe0b987e0b894.jpg'},
        {id: 4, name: 'เวจจี้', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b980e0b8a7e0b888e0b888e0b8b5e0b989.jpg'},
        {id: 5, name: 'ดับเบิ้ลชีสพิซซ่า', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b894e0b8b1e0b89ae0b980e0b89ae0b8b4e0b989e0b8a5e0b88ae0b8b5e0b8aa.jpg'},
        {id: 6, name: 'ดับเบิ้ลเป๊ปเปอโรนี', price: '299', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b894e0b8b1e0b89ae0b980e0b89ae0b8b4e0b989e0b8a5e0b980e0b89be0b98ae0b89be0b980e0b89be0b8ade0b982e0b8a3e0b899e0b8b5.jpg'},
        {id: 7, name: 'ซีฟู้ดเดอลุกซ์', price: '369', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b980e0b894e0b8ade0b8a5e0b8b8e0b881e0b88be0b98c.jpg'},
        {id: 8, name: 'ซีฟู้ดค็อกเทล', price: '369', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b884e0b987e0b8ade0b881e0b980e0b897e0b8a5.jpg'},
        {id: 9, name: 'ค็อกเทลกุ้ง', price: '369', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b884e0b987e0b8ade0b881e0b980e0b897e0b8a5e0b881e0b8b8e0b989e0b887.jpg'},
        {id: 10, name: 'ทรอปิคอลซีฟู้ด', price: '369', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b897e0b8a3e0b8ade0b89be0b8b4e0b884e0b8ade0b8a5e0b88be0b8b5e0b89fe0b8b9e0b989e0b894.jpg'},
        {id: 11, name: 'ต้มยำกุ้ง', price: '369', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b895e0b989e0b8a1e0b8a2e0b8b3e0b881e0b8b8e0b989e0b887.jpg'}
      ]
    },
    {
      category: "PizzaPuf",
      products: [
        {id: 12, jumbo: 'จัมโบ้ พิซซ่า พัฟ ', name: 'แฮมและปูอัด', price: '99', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm102405.jpg'},
        {id: 13, jumbo: 'จัมโบ้ พิซซ่า พัฟ ',name: 'ฮาวายเอี้ยน', price: '119', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm102403.jpg'},
        {id: 14, jumbo: 'จัมโบ้ พิซซ่า พัฟ ',name: 'ไก่สามรส', price: '119', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm102404.jpg'},
        {id: 15, jumbo: 'จัมโบ้ พิซซ่า พัฟ ',name: 'ซุปเปอร์เดอลุกซ์', price: '119', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm102402.jpg'},
        {id: 16, jumbo: 'จัมโบ้ พิซซ่า พัฟ ',name: 'ซีฟู้ดค็อกเทล', price: '139', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm102401.jpg'}

      ]
    },
    {
      category: "Pasta",
      products: [
        {id: 17, name: 'สปาเก็ตตี้ คาโบนาร่าอบ', price: '139', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b884e0b8b2e0b982e0b89ae0b899e0b8b2.jpg'},
        {id: 18, name: 'สปาเก็ตตี้ ซอสไก่สับ', price: '99', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b984e0b881e0b988e0b8aae0b8b1e0b89a.jpg'},
        {id: 19, name: 'สปาเก็ตตี้เบคอนผัดพริกแห้ง', price: '109', img: 'https://nathaponweb.files.wordpress.com/2016/09/e0b980e0b89ae0b884e0b8ade0b899.jpg'},
        {id: 20, name: 'สปาเก็ตตี้ ขี้เมาทะเล', price: '139', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm115580.jpg'},
        {id: 21, name: 'สปาเก็ตตี้ใส้กรอกผัดพริกแห้ง', price: '99', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm115536.jpg'},
        {id: 22, name: 'สปาเก็ตตี้แฮมและเห็ด', price: '99', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm115538.jpg'},
        {id: 23, name: 'ผักโขมอบชีส', price: '179', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm115505.jpg'}
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 24, name: 'ซีซาร์สลัด', price: '139', img:'https://nathaponweb.files.wordpress.com/2016/10/itm116508.jpg'},
        { id: 25, name: 'สลัดกุ้ง', price: '159', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm116513.jpg' },
        { id: 26, name: 'การ์เดนสลัด และน้ำสลัดเทาซันไอส์แลนด์', price: '99',img:'https://nathaponweb.files.wordpress.com/2016/10/itm116504.jpg' },
        { id: 27, name: 'การ์เดนสลัด และน้ำครีมสลัด', price: '99',img:'https://nathaponweb.files.wordpress.com/2016/10/itm116503.jpg' }
      ]
    },
    {
      category: 'Appetizer',
      products: [
        { id: 28, name: 'ชิกเก้น นักเก็ตส์ 6 ชิ้น พร้อมซอสมะเขือเทศ', price: '79', img:'https://nathaponweb.files.wordpress.com/2016/10/itm116569.jpg'},
        { id: 29, name: 'ชิกเก้น นักเก็ตส์ 6 ชิ้น พร้อมน้ำจิ้มไก่', price: '79', img: 'https://nathaponweb.files.wordpress.com/2016/10/itm116570.jpg' },
        { id: 30, name: 'ชิกเก้นสติ๊กส์', price: '89',img:'https://nathaponweb.files.wordpress.com/2016/10/itm1165201.jpg' },
        { id: 31, name: 'ขนมปังกระเทียม', price: '79',img:'https://nathaponweb.files.wordpress.com/2016/10/itm116525.jpg' },
        { id: 32, name: 'ขนมปังกระเทียมชีส', price: '89',img:'https://nathaponweb.files.wordpress.com/2016/10/itm116526.jpg' },
        { id: 33, name: 'เบรดสติ๊กส์', price: '79',img:'https://nathaponweb.files.wordpress.com/2016/10/itm116527.jpg' }
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
