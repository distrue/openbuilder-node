import { output } from "./output";
import { quickReply } from './quickreply';
export declare class Template {
    outputs: output[];
    quickReplies: quickReply[];
    constructor();
    addOutput(item: output): void;
    eraseOutput(idx: number): void;
    listOutput(): output[];
    json(): Object;
}
