import {Button} from '.';

export interface linkButton {
  action: string;
  label: string;
  webLinkUrl: string;
}

export class LinkButton extends Button {
  link: string;

  constructor({label, link}: {
    label: string,
    link: string,
  }) {
    super('webLink', label);
    this.link = link;
  }

  json(): linkButton {
    return({
      "action": this.action,
      "label": this.label,
      "webLinkUrl": this.link,
    });
  }
}
