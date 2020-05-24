"use strict";
exports.__esModule = true;
exports.BasicCard = void 0;
var BasicCard = /** @class */ (function () {
    function BasicCard(title, desc, thumbnail) {
        this.buttons = [];
        this.title = title;
        this.desc = desc;
        this.thumbnail = thumbnail;
    }
    BasicCard.prototype.addBtn = function (item) {
        this.buttons.push(item);
    };
    BasicCard.prototype.eraseBtn = function (idx) {
        this.buttons.splice(idx, 1);
    };
    BasicCard.prototype.showBtns = function () {
        return this.buttons;
    };
    BasicCard.prototype.json = function () {
        return ({
            "basicCard": {
                "title": this.title,
                "description": this.desc,
                "buttons": this.buttons,
                "thumbnail": {
                    "imageUrl": this.thumbnail
                }
            }
        });
    };
    BasicCard.prototype.carousel = function () {
        return ({
            "title": this.title,
            "description": this.desc,
            "buttons": this.buttons,
            "thumbnail": {
                "imageUrl": this.thumbnail
            }
        });
    };
    return BasicCard;
}());
exports.BasicCard = BasicCard;
