import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private data = [
    {
      category: 'Promotion',
      expended: true,
      products: [
        {
          id: 0,
          name: '2 Mango Berry Twin',
          price: '210',
          img: 'https://images-ext-2.discordapp.net/external/sYckUDkT15EDGeJsEYHhH8HoAgxU6ZT-Tc2mGeD9vyQ/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/16020876.jpg',
        },
        {
          id: 1,
          name: '2 Coco Moo Moo',
          price: '210',
          img: 'https://images-ext-1.discordapp.net/external/5QkZ0SLBs26uuf-8L2uRslLS53QM-LLDxZKeUdrwQNk/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/16020877.jpg',
        },
        {
          id: 2,
          name: '2 Berry Ghurt',
          price: '210',
          img: 'https://images-ext-1.discordapp.net/external/_EYD0vlpineKhh6vidxXlSs1vYynkE7ZRJuEu6Y5rsQ/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/16020881.jpg',
        },
        {
          id: 3,
          name: '2 Berry the Boss',
          price: '210',
          img: 'https://images-ext-1.discordapp.net/external/r9gN_JEX0xvVsAiTk4XEh0fKC3jP5LkLvbaxmUzzW1A/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/16020880.jpg',
        },
      ],
    },
    {
      category: 'Super Fruit',
      expended: true,
      products: [
        {
          id: 4,
          name: 'Homsuwan Detox',
          price: '115',
          img: 'https://images-ext-2.discordapp.net/external/JDLlfHeQRmRia1J4IM3q1ywgQBUQkuFcrd7M0soZp6E/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1861225.jpg',
        },
      ],
    },
    {
      category: 'BROWN SUGAR FRESH MILK',
      expended: true,
      products: [
        {
          id: 5,
          name: 'Brown Sugar Fresh Milk with Brown Sugar Jelly',
          price: '69',
          img: 'https://images-ext-2.discordapp.net/external/3BZmB1Xi4ka6-XnmZwht7cQaZYd5Hk6qsZxk-rf-uZs/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1893656.jpg',
        },
        {
          id: 6,
          name: 'Ceylon Tea with Brown Sugar Jelly',
          price: '59',
          img: 'https://images-ext-1.discordapp.net/external/taHOedMe-KDzM2DqGKHnfz5mhbSusZbtDYwb56RxN-k/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1893603.jpg',
        },
      ],
    },
    {
      category: 'Classic Smoothie',
      products: [
        {
          id: 7,
          name: 'Berry Blitz',
          price: '85',
          img: 'https://images-ext-1.discordapp.net/external/IWtCb1WqaU0boUi9tG6JVx3AyZliu-DN66lrpzwR3Jc/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1861230.jpg',
        },
        {
          id: 8,
          name: 'Strawberry Sunrise',
          price: '85',
          img: 'https://images-ext-2.discordapp.net/external/qwqh_8hVbkw_Nilk5EcfSbIxqdYLPL9Gg-6uqIuL2zY/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1861231.jpg',
        },
        {
          id: 9,
          name: 'Mighty Mulberry',
          price: '85',
          img: 'https://images-ext-2.discordapp.net/external/7eQXryN0FX7nneGzW26wJWhlH6U5fFco1JZe4JMSAgA/%3Fwidth%3D600/https/images.deliveryhero.io/image/fd-th/Products/1861233.jpg',
        },
      ],
    },
  ];

  private cart = [];

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
