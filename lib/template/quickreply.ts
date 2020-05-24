export interface quickReply {
    label: string;
    action: string;
    messageText: string;
    blockId?: string;
    extra?: Object;    
};

export function QuickReply(label: string, type: 'message' | 'block', messageText: string, blockId?: string, extra?: Object) {
    if(type === 'block') {
        return({
            label: label,
            action: type,
            messageText: messageText,
            blockId: blockId,
            extra: extra || {}
        });
    }
    else if(type === 'message') {
        return({
            label: label,
            action: type,
            messageText: messageText,
            extra: extra || {}
        });
    }
};
