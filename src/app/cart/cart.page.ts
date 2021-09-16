import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];

  total = 0;

  constructor(
    private cartService: CartService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map((key) => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + b.count * b.price, 0);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'แจ้งเตือนลูกค้า',
      message: 'จ่ายเงินสำเร็จ!!!!.',
      buttons: ['ยอมรับ'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  paySuccess() {
    this.presentAlert();
  }
}
