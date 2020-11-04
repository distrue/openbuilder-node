import { BareOutput, CarouselOutput, carouselType, Output } from "./output";
import { quickReply } from './quickreply';

export class Template {
    outputs: Output[] = [];
    quickReplies: quickReply[] = [];

    constructor() {
    }

    getOutput(idx: number): Output {
      if(this.outputs.length <= idx) {
        throw Error("idx overflows");
      }
      return this.outputs[idx];
    }

    getOutputasCarousel(idx: number): CarouselOutput {
      if(this.outputs.length <= idx) {
        throw Error("idx overflows");
      }
      return this.outputs[idx] as CarouselOutput;
    }

    getOutputasBare(idx: number): BareOutput {
      if(this.outputs.length <= idx) {
        throw Error("idx overflows");
      }
      return this.outputs[idx] as BareOutput;
    }

    // TODO: constraint maximum 3
    addOutput(item: Output) {
        this.outputs.push(item);
    }

    addBareOutput({type, title, thumbnail, desc}: {
      type: 'basic' | 'commerce' | 'list',
      title: string,
      thumbnail: string,
      desc?: string
    }) {
      const bare = new BareOutput(type, title, thumbnail, desc);
      this.outputs.push(bare);
    }

    addCarouselOutput(type: carouselType) {
      const carousel = new CarouselOutput(type);
      this.outputs.push(carousel);
    }

    eraseOutput(idx: number) {
        this.outputs.splice(idx, 1);
    }

    listOutput() {
        return this.outputs;
    }

    addQuickReply(item: quickReply) {
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
            "quickReplies": this.quickReplies
        })
    }
}

export {BareOutput, CarouselOutput} from './output';

export {Card, BasicCard, ListCard, CommerceCard} from './output/card';

export {Button, BlockButton, LinkButton, MessageButton, OperatorButton, PhoneButton, ShareButton} from './output/card/button';

export {QuickReply, BlockQuickReply, MessageQuickReply} from './quickreply';
