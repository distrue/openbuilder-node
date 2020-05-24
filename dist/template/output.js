"use strict";
exports.__esModule = true;
exports.Carousel = exports.Bare = void 0;
var Bare = /** @class */ (function () {
    function Bare(item) {
        this.card = item;
    }
    Bare.prototype.json = function () {
        return this.card.json();
    };
    return Bare;
}());
exports.Bare = Bare;
var Carousel = /** @class */ (function () {
    function Carousel(type) {
        this.items = [];
        this.type = type;
    }
    Carousel.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Carousel.prototype.eraseItem = function (idx) {
        this.items.splice(idx, 1);
    };
    Carousel.prototype.showItems = function () {
        return this.items;
    };
    Carousel.prototype.json = function () {
        return ({
            "carousel": {
                "type": this.type,
                "items": this.items.map(function (it) { return it.carousel(); })
            }
        });
    };
    return Carousel;
}());
exports.Carousel = Carousel;
exports["default"] = {
    Bare: Bare,
    Carousel: Carousel
};
