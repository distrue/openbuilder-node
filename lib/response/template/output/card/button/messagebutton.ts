import {Button} from '.';

export interface messageButton {
  action: string;
  label: string;
  messageText: string;
}

export class MessageButton extends Button {
  messageText: string;

  constructor({label, messageText}: {
    label: string,
    messageText: string,
  }) {
    super('message', label);
    this.messageText = messageText;
  }

  json(): messageButton {
    return({
      "action": this.action,
      "label": this.label,
      "messageText": this.messageText,
    });
  }
}
