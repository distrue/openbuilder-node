import {blockButton} from './blockbutton';
import {messageButton} from './messagebutton';
import {shareButton} from './sharebutton';
import {operatorButton} from './operatorbutton';
import {phoneButton} from './phonebutton';
import {linkButton} from './linkbutton';

export abstract class Button {
    action: string;
    label: string;
  
    constructor(action: string, label: string) {
      this.action = action;
      this.label = label;
    }
  
    abstract json(): blockButton | messageButton | shareButton | operatorButton | phoneButton | linkButton;
}

export {BlockButton} from './blockbutton';

export {MessageButton} from './messagebutton';

export {ShareButton} from './sharebutton';

export {OperatorButton} from './operatorbutton';

export {PhoneButton} from './phonebutton';

export {LinkButton} from './linkbutton';
