"use strict";
exports.__esModule = true;
exports.Button = void 0;
function Button(type, actionParams) {
    if (type === 'block') {
        var params = actionParams;
        return ({
            "action": "block",
            "label": params.label,
            "messageText": params.messageText,
            "blockId": params.blockId,
            "extra": params.extra || {}
        });
    }
    if (type === 'message') {
        var params = actionParams;
        return ({
            "action": "message",
            "label": params.label,
            "messageText": params.messageText
        });
    }
    if (type === "share") {
        var params = actionParams;
        return ({
            "action": "share",
            "label": params.label
        });
    }
    if (type === "operator") {
        var params = actionParams;
        return ({
            "action": "operator",
            "label": params.label
        });
    }
    if (type === "phone") {
        var params = actionParams;
        return ({
            "action": "phone",
            "label": params.label,
            "phoneNumber": params.phoneNumber
        });
    }
    if (type === "webLink") {
        var params = actionParams;
        return ({
            "action": "webLink",
            "label": params.label,
            "webLinkUrl": params.link
        });
    }
    throw Error("unsupported button type");
}
exports.Button = Button;
