import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  public userData = [
    {
      userid : 'abc@media.com',
      username : 'tom',
      password :'abc123'
    },
    {
      userid : 'def@media.com',
      username : 'dick',
      password :'def123'
    }
  ] ;

  public currentUser = {
    userid : '',
    username : '',
    password :'',
    status: false,
  }
}
