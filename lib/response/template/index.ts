import { Output as _Output } from "./output";
import { QuickReply as _QuickReply } from './quickreply';

export class Template {
    outputs: _Output[] = [];
    quickReplies: _QuickReply[] = [];

    constructor() {
    }

    getOutput(idx: number): _Output {
      if(this.outputs.length <= idx) {
        throw Error("idx overflows");
      }
      return this.outputs[idx];
    }

    // TODO: constraint maximum 3
    addOutput(item: _Output) {
        this.outputs.push(item);
    }

    eraseOutput(idx: number) {
        this.outputs.splice(idx, 1);
    }

    listOutput() {
        return this.outputs;
    }

    // TODO: constraint maximum 10
    addQuickReply(item: _QuickReply) {
        this.quickReplies.push(item);
    }

    eraseQuickReply(idx: number) {
        this.quickReplies.splice(idx, 1);
    }

    listQuickReply() {
        return this.quickReplies;
    }

    json(): Object {
        return({
            "outputs": this.outputs.map(it => it.json()),
            "quickReplies": this.quickReplies.map(it => it.json())
        })
    }
}

export * as Button from './output/card/button';
export * as Card from './output/card';
export * as Output from './output';
export * as QuickReply from './quickreply';

/*
export namespace Output {
  export class BareOutput
  export class CarouselOutput  
}

export const Card = {
  BasicCard,
  CommerceCard,
  ListCard
}

export const Button = {
  BlockButton,
  LinkButton,
  MessageButton, 
  OperatorButton, 
  PhoneButton, 
  ShareButton 
}

export const QuickReply = {
  BlockQuickReply,
  MessageQuickReply
}
*/