import {Button} from '.';

export interface operatorButton {
  action: string;
  label: string;
}

export class OperatorButton extends Button {
  constructor({label}: {label: string}) {
    super('operator', label);
  }

  json(): operatorButton {
    return({
      "action": this.action,
      "label": this.label
    });
  }
}
