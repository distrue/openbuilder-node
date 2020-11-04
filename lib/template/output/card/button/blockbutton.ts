import {Button} from '.';

export interface blockButton {
  action: string;
  label: string;
  messageText: string;
  blockId: string;
  extra?: Object;
}

export class BlockButton extends Button {
  messageText: string;
  blockId: string;
  extra: any;

  constructor(
    label: string,
    messageText: string,
    blockId: string,
    extra?: Object
  ) {
    super('block', label);
    this.messageText = messageText;
    this.blockId = blockId;
    this.extra = extra? extra: {};
  }

  json(): blockButton {
    return({
      "action": this.action,
      "label": this.label,
      "messageText": this.messageText,
      "blockId": this.blockId,
      "extra": this.extra || {}
    });
  }
}
