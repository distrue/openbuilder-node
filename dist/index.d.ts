import { Template } from './template';
export declare class SkillResponse {
    version: string;
    template: Template;
    context: any[];
    constructor();
    json(): {
        version: string;
        template: Object;
        context: {
            values: any[];
        };
    };
}
export { Output, Card, Cmpnts, QuickReply, Template } from './template';
