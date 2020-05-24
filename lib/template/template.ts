import { output } from "./output";
import { quickReply } from './quickreply';

export class Template {
    outputs: output[] = [];
    quickReplies: quickReply[] = [];

    constructor() {
    }

    // TODO: constraint maximum 3
    addOutput(item: output) {
        this.outputs.push(item);
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
