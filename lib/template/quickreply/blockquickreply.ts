import {quickReply, QuickReply} from './';

export interface blockQuickReply extends quickReply {
  blockId: string;
  extra?: Object;
}

export class BlockQuickReply extends QuickReply {
  blockId: string;
  extra: Object;

  constructor(label: string, messageText: string, blockId: string, extra?: Object) {
    super('block', label, messageText);
    this.blockId = blockId;
    this.extra = extra || {};
  }

  json(): blockQuickReply {
    return{
      label: this.label,
      action: this.action,
      messageText: this.messageText,
      blockId: this.blockId,
      extra: this.extra
    };
  }
}
