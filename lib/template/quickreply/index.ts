import {blockQuickReply} from './blockquickreply';
import {messageQuickReply} from './messagequickreply';

export interface quickReply {
  label: string;
  action: string;
  messageText: string;
}

export abstract class QuickReply {
  label: string;
  action: string;
  messageText: string;
  
  constructor(label: string, action: string, messageText: string) {
    this.label = label;
    this.action = action;
    this.messageText = messageText;
  }

  abstract json(): blockQuickReply | messageQuickReply;
}

export {BlockQuickReply} from './blockquickreply';
export {MessageQuickReply} from './messagequickreply';
