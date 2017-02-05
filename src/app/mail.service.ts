import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  constructor() { }

  // message = `You've got mail!!!`

  messages = [
    { id: 0, text: 'You are now friends with John' },
    { id: 1, text: 'John liked your tweet' },
    { id: 2, text: 'You will never believe what John said!!!' }
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id ? { id, text } : m)
  }

}
