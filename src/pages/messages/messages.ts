import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Pop2Page } from '../pop2/pop2';
//import { NativeKeyboard } from '@ionic-native/native-keyboard';
//import { Keyboard } from '@ionic-native/keyboard';
import { Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataSourceProvider } from '../../providers/data-source/data-source';



@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers: [Keyboard]
})
export class MessagesPage {
 message:any;
  messages:any;
  chat:any;


  constructor(public viewCtrl:ViewController,public dataSource : DataSourceProvider,statusBar: StatusBar, splashScreen: SplashScreen,platform: Platform,private keyboard: Keyboard,public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams) 
  {
    this.message=this.dataSource.messages;
    this.keyboard.show();
    this.keyboard.hide();

    for (let msg of this.message) {
      msg['user_name'] = this.dataSource.getusername(msg.chatId);
    }

    // for (let msg of this.messages) {
    //   msg['name'] = this.dataSource.getusername(msg.chatId);
    // }

    //platform.ready().then(() => {
    // statusBar.styleDefault();
     // splashScreen.hide();
      //keyboard.show();
    //});

    //  this.ch = this.dataSource.chats;
    //  for (let chat of this.ch) {
    //   chat['allMessages'] = this.dataSource.getallthemessages(chat.chatId);
    // }
    this.chat=this.navParams.get('chatObject');
    this.messages = this.dataSource.getallthemessages(this.chat.chatId);
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(Pop2Page);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      
    })
  
  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
