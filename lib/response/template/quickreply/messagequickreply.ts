import {quickReply, QuickReply} from '.';

export interface messageQuickReply extends quickReply {
  extra?: Object;
}

export class MessageQuickReply extends QuickReply {
  extra: Object;

  constructor(label: string, messageText: string, extra?: Object) {
    super('block', label, messageText);
    this.extra = extra || {};
  }

  json(): messageQuickReply {
    return{
      label: this.label,
      action: this.action,
      messageText: this.messageText,
      extra: this.extra
    };
  }
}
