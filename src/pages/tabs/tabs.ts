import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { StatusPage } from '../status/status';
import { CallsPage } from '../calls/calls';
//import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
 })
 
export class TabsPage {
  account: Account[];

  chatPage;
  statusPage;
  callsPage;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { 

    this.chatPage = ChatPage;
    this.statusPage=StatusPage;
    this.callsPage=CallsPage;
  }

}
