import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';


@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(public popoverCtrl: PopoverController,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentPopover(myEvent) {
    // let popover = this.popoverCtrl.create();
    // popover.present({
    //   ev: myEvent
    // });
    // popover.onDidDismiss(data => {
      
    // })
  
  }
}
