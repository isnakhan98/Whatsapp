import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PopoverPage } from '../pages/popover/popover';
import { SearchPage } from '../pages/search/search';
import { StatusPage } from '../pages/status/status';
import { CallsPage } from '../pages/calls/calls';
import { ChatPage } from '../pages/chat/chat';
import { MessagesPage } from '../pages/messages/messages';
import { Pop2Page } from '../pages/pop2/pop2';
import { DataSourceProvider } from '../providers/data-source/data-source';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactsPage } from '../pages/contacts/contacts';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
   MessagesPage,
    SearchPage,
    StatusPage,
    CallsPage,
    ChatPage,
    Pop2Page,
    TabsPage,
    ContactsPage
   ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    MessagesPage,
    SearchPage,
    ChatPage,
    CallsPage,
    StatusPage,
    Pop2Page,
    TabsPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataSourceProvider
  ]
})
export class AppModule {}
