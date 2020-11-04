import {Button} from '.';

export interface shareButton {
  action: string;
  label: string;
}

export class ShareButton extends Button {
  constructor(
    label: string
  ) {
    super('share', label);
  }

  json(): shareButton {
    return({
      "action": this.action,
      "label": this.label
    });
  }
}
