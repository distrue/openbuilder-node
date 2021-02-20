import {Button} from '.';

export interface phoneButton {
  action: string;
  label: string;
  phoneNumber: string;
}

export class PhoneButton extends Button {
  phoneNumber: string;

  constructor({label, phoneNumber}: {
    label: string,
    phoneNumber: string
  }) {
    super('phone', label);
    this.phoneNumber = phoneNumber;
  }

  json(): phoneButton {
    return({
      "action": this.action,
      "label": this.label,
      "phoneNumber": this.phoneNumber
    });
  }
}
