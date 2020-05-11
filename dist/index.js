"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function responseWrapper(items) {
    return ({
        "version": "2.0",
        "template": {
            "outputs": items
        }
    });
}
function listItem(title, description, imageUrl, webLink) {
    return ({
        "title": title,
        "description": description,
        "imageUrl": imageUrl,
        "link": {
            "web": webLink || undefined
        }
    });
}
function buttonItem(type, actionParams) {
    if (type === 'block') {
        var params = actionParams;
        return ({
            "action": "block",
            "label": params.label,
            "messageText": params.messageText,
            "blockId": params.blockId,
            "extra": params.extra || undefined // {restaurant_name: searchTitle(data.name)}
        });
    }
    if (type === 'message') {
        var params = actionParams;
        return {
            "action": "message",
            "label": params.label,
            "messageText": params.messageText
        };
    }
    return ({
        "action": "share",
        "label": "공유하기"
    });
}
function listCard(title, titleThumbnail, items, buttons) {
    if (items === void 0) { items = []; }
    if (buttons === void 0) { buttons = []; }
    return ({
        "listCard": {
            "header": {
                "title": title,
                "imageUrl": titleThumbnail
            },
            "items": items,
            "buttons": buttons
        }
    });
}
function basicCard(msg, description, imageUrl, buttons) {
    if (buttons === void 0) { buttons = []; }
    return ({
        "basicCard": {
            "title": msg,
            "description": description,
            "buttons": buttons,
            "thumbnail": {
                "imageUrl": imageUrl
            }
        }
    });
}
function carousel(type, list) {
    return ({
        "carousel": {
            "type": type,
            "items": list
        }
    });
}
function fallbackBlock(msg, type) {
    var buttons = [];
    var imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%82%E1%85%AE%E1%84%91%E1%85%AE%E1%84%91%E1%85%A1+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.PNG";
    if (type === 'coupon') {
        imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/coupon.png";
    }
    if (type === 'qrcode') {
        imageUrl = "https://snuffstatic.s3.ap-northeast-2.amazonaws.com/qrque.png";
    }
    return ({
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "basicCard": {
                        "title": msg,
                        "buttons": buttons,
                        "thumbnail": {
                            "imageUrl": imageUrl
                        }
                    }
                }
            ]
        }
    });
}
function basicCardCarousel(list) {
    return ({
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "carousel": {
                        "type": "basicCard",
                        "items": list
                    }
                }
            ]
        }
    });
}
exports.default = {
    responseWrapper: responseWrapper,
    listItem: listItem,
    buttonItem: buttonItem,
    listCard: listCard,
    basicCard: basicCard,
    carousel: carousel,
    fallbackBlock: fallbackBlock,
    basicCardCarousel: basicCardCarousel
};
