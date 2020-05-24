"use strict";
exports.__esModule = true;
exports.ListCard = exports.ListItem = void 0;
function ListItem(title, description, imageUrl, webLink) {
    return ({
        "title": title,
        "description": description,
        "imageUrl": imageUrl,
        "link": {
            "web": webLink || ''
        }
    });
}
exports.ListItem = ListItem;
var ListCard = /** @class */ (function () {
    function ListCard(title, thumbnail) {
        this.items = [];
        this.buttons = [];
        this.title = title;
        this.thumbnail = thumbnail;
    }
    ListCard.prototype.addList = function (item) {
        this.items.push(item);
    };
    ListCard.prototype.eraseList = function (idx) {
        this.items.splice(idx, 1);
    };
    ListCard.prototype.showLists = function () {
        return this.items;
    };
    ListCard.prototype.addBtn = function (item) {
        this.buttons.push(item);
    };
    ListCard.prototype.eraseBtn = function (idx) {
        this.buttons.splice(idx, 1);
    };
    ListCard.prototype.showBtns = function () {
        return this.buttons;
    };
    ListCard.prototype.json = function () {
        return ({
            "listCard": {
                "header": {
                    "title": this.title,
                    "imageUrl": this.thumbnail
                },
                "items": this.items,
                "buttons": this.buttons
            }
        });
    };
    return ListCard;
}());
exports.ListCard = ListCard;
