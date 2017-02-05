import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  constructor() { }

  // message = `You've got mail!!!`

  messages = [
    'You are now friends with John',
    'John liked your tweet',
    'You will never believe what John said!!!'
  ];

}
