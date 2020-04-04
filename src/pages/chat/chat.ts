import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { MessagesPage } from '../messages/messages';
import { DataSourceProvider } from '../../providers/data-source/data-source';
//import { HeaderColor } from '@ionic-native/header-color';
import { TabsPage } from '../tabs/tabs';
import{ContactsPage} from  '../contacts/contacts'; 

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'chat.html',
})


export class ChatPage {
//headcolor:"any";
  images=[];
  chatPage;
  chats : any;
  message:any;

  constructor(public viewCtrl: ViewController, public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams,
    public dataSource : DataSourceProvider,public modalCtrl: ModalController) 
    
    {
    // this.images.push(
    //   {img:"https://placeimg.com/640/480/people",name:"A"},
    //   {img:"https://placeimg.com/640/480/people",name:"B"},
    //   {img:"https://placeimg.com/640/480/people",name:"C"},
    //   {img:"https://placeimg.com/640/480/people",name:"D"},
    //   {img:"https://placeimg.com/640/480/people",name:"E"},
    //   {img:"https://placeimg.com/640/480/people",name:"F"},
    //  )

this.chatPage=ChatPage;

    this.chats = this.dataSource.chats;
    
    for (let chat of this.chats) {
      chat['lastMessage'] = this.dataSource.getMessageWithId(chat.lastMessageId);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goTosearchPage() { this.navCtrl.push(SearchPage); }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
          })}

open_chat(chat:any)
{
//  this.navCtrl.push(MessagesPage,{chatObject : chat});
let myModal = this.modalCtrl.create(MessagesPage,{chatObject : chat});
    myModal.present();
}

closeModal() {
  this.viewCtrl.dismiss();
}
display_last_message()
{if (this.chats.lastMessageId==this.message.messageId)
  {return this.message.messageId;}
}
open_contacts()
{
  debugger;
  let myModal = this.modalCtrl.create(ContactsPage);
    myModal.present();
  
}

}
