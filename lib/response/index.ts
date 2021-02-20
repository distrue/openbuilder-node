import {Template} from './template';

export class SkillResponse {
  version: string = "2.0";
  template: Template;
  context: any[] = [];
  data: any;
  // TODO: context, data type

  constructor() {
    this.template = new Template();
  }

  json() {
    return({
      version: this.version,
      template: this.template.json(),
      context: {values:[]}
    })
  }
}

export * from './template';
