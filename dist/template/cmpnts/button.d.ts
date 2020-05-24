interface blockParams {
    label: string;
    messageText: string;
    blockId: string;
    extra?: Object;
}
interface msgParams {
    label: string;
    messageText: string;
}
interface shareParams {
    label: string;
}
interface operatorParams {
    label: string;
}
interface phoneParams {
    label: string;
    phoneNumber: string;
}
declare type buttonParams = blockParams | msgParams | shareParams | operatorParams | phoneParams;
interface blockButton {
    action: string;
    label: string;
    messageText: string;
    blockId: string;
    extra: Object;
}
interface msgButton {
    action: string;
    label: string;
    messageText: string;
}
interface shareButton {
    action: string;
    label: string;
}
export declare type button = blockButton | msgButton | shareButton;
export declare function Button(type: string, actionParams: buttonParams): button;
export {};
