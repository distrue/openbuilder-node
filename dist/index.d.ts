export interface blockParams {
    label: string;
    messageText: string;
    blockId: string;
    extra?: Object;
}
export interface msgParams {
    label: string;
    messageText: string;
}
declare type carouselType = 'basicCard';
declare function responseWrapper(items: Object[]): {
    "version": string;
    "template": {
        "outputs": Object[];
    };
};
declare function listItem(title: string, description: string, imageUrl: string, webLink?: string): {
    "title": string;
    "description": string;
    "imageUrl": string;
    "link": {
        "web": string | undefined;
    };
};
declare function buttonItem(type: string, actionParams: blockParams | Object): {
    "action": string;
    "label": string;
    "messageText": string;
    "blockId": string;
    "extra": Object | undefined;
} | {
    "action": string;
    "label": string;
    "messageText": string;
    "blockId"?: undefined;
    "extra"?: undefined;
} | {
    "action": string;
    "label": string;
    "messageText"?: undefined;
    "blockId"?: undefined;
    "extra"?: undefined;
};
declare function listCard(title: string, titleThumbnail: string, items?: any[], buttons?: any[]): {
    "listCard": {
        "header": {
            "title": string;
            "imageUrl": string;
        };
        "items": any[];
        "buttons": any[];
    };
};
declare function basicCard(msg: string, description: string, imageUrl: string, buttons?: any[]): {
    "basicCard": {
        "title": string;
        "description": string;
        "buttons": any[];
        "thumbnail": {
            "imageUrl": string;
        };
    };
};
declare function carousel(type: carouselType, list: any[]): {
    "carousel": {
        "type": "basicCard";
        "items": any[];
    };
};
declare function fallbackBlock(msg: string, type?: string): {
    "version": string;
    "template": {
        "outputs": {
            "basicCard": {
                "title": string;
                "buttons": any;
                "thumbnail": {
                    "imageUrl": string;
                };
            };
        }[];
    };
};
declare function basicCardCarousel(list: any[]): {
    "version": string;
    "template": {
        "outputs": {
            "carousel": {
                "type": string;
                "items": any[];
            };
        }[];
    };
};
declare const _default: {
    responseWrapper: typeof responseWrapper;
    listItem: typeof listItem;
    buttonItem: typeof buttonItem;
    listCard: typeof listCard;
    basicCard: typeof basicCard;
    carousel: typeof carousel;
    fallbackBlock: typeof fallbackBlock;
    basicCardCarousel: typeof basicCardCarousel;
};
export default _default;
