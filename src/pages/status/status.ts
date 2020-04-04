import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { DataSourceProvider } from '../../providers/data-source/data-source';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})

export class StatusPage {
chat:any;
myUser : any;
  constructor(public modalCtrl: ModalController, public dataSource : DataSourceProvider,public navCtrl: NavController, public navParams: NavParams) {
   
    this.chat=this.dataSource.chats;
    this.myUser = this.dataSource.chats[1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
}
