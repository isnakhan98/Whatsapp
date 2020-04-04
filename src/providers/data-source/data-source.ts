import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { convertUrlToDehydratedSegments } from 'ionic-angular/umd/navigation/url-serializer';

@Injectable()
export class DataSourceProvider {

  chats = [{
   
    chatId: 0 ,
    userName : 'a1',
    day:'today,',
    time:'1:20PM',
    lastMessageId : 2,
    img:"https://placeimg.com/640/480/people"},

  
  {
    chatId: 1 ,
    userName : 'a2',
    lastMessageId : 4,
    day:'today,',
    time:'1:20PM',
    img:"https://placeimg.com/640/480/people"
  },
  {
    chatId: 2 ,
    userName : 'a3',
    lastMessageId : 6,
    day:'today,',
    time:'1:20PM',
    img:"https://placeimg.com/640/480/people"
  },
  {
    chatId: 3 ,
    userName : 'a4',
    lastMessageId : 8,
    day:'today,',
    time:'1:20PM',
    img:"https://placeimg.com/640/480/people"
  }]


  messages = [{
    messageId : 0,
    chatId  : 0,
    messageType : 0,
    isReceived : false,
    day:'today,',
    time:'1:20PM',
    messageText : 'Hi 1'
  },
  {
    messageId : 1,
    chatId  : 0,
    messageType : 0,
    isReceived : true,
    day:'today,',
    time:'1:20PM',
    messageText : ' Hi 2'
  },
  {
    messageId : 2,
    chatId  : 0,
    messageType : 0,
    isReceived : true,
    day:'today,',
    time:'1:20PM',
    messageText : 'Hi 3'
  },
  {
    messageId : 3,
    chatId  : 1,
    messageType : 0,
    day:'today,',
    time:'1:20PM',
    isReceived : true,
    messageText : 'hi 1'
  },
  {
    messageId : 4,
    chatId  : 1,
    messageType : 0,
    isReceived : true,
    day:'today,',
    time:'1:20PM',
    messageText : 'hi 2'
  },
  {
    messageId : 5,
    chatId  : 2,
    messageType : 0,
    day:'today,',
    time:'1:20PM',
    isReceived : true,
    messageText : 'Hello '
  },
  {
    messageId : 6,
    chatId  : 2,
    messageType : 0,
    isReceived : true,
    day:'today,',
    time:'1:20PM',
    messageText : 'asdasd'
  },
  {
    messageId : 7,
    chatId  : 3,
    day:'today,',
    time:'1:20PM',
    messageType : 0,
    isReceived : true,
    messageText : 'asdasd'
  },{
    messageId : 8,
    chatId  : 3,
    day:'today,',
    time:'1:20PM',
    messageType : 0,
    isReceived : true,
    messageText : 'asdasd'
  },
  {
    messageId : 9,
    chatId  : 3,
    messageType : 0,
    day:'today,',
    time:'1:20PM',
    isReceived : true,
    messageText : '123123'
  }]

  constructor() {}

  getMessageWithId(messageId : number) : any {
    for(let message of this.messages) {
      if (message.messageId == messageId) {
        return message;} }
    return null;}

getallthemessages(id:number)
{
let messagesArray = []; 
for(let chat of this.messages)
{
  if(chat.chatId == id)
  {messagesArray.push(chat)} 
}
return messagesArray;
}
  receiveMessage (jsonMessage : any) {
  }

  getusername(chat_id:number)
{
for(let ch of this.chats)
{
  if(ch.chatId==chat_id)
{return ch; 
}//if
else return null;}//for
                      }//getusername
}
