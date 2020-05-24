"use strict";
exports.__esModule = true;
exports.Template = void 0;
var Template = /** @class */ (function () {
    function Template() {
        this.outputs = [];
        this.quickReplies = [];
    }
    // TODO: constraint maximum 3
    Template.prototype.addOutput = function (item) {
        this.outputs.push(item);
    };
    Template.prototype.eraseOutput = function (idx) {
        this.outputs.splice(idx, 1);
    };
    Template.prototype.listOutput = function () {
        return this.outputs;
    };
    // TODO: develop quickReplies
    Template.prototype.json = function () {
        return ({
            "outputs": this.outputs.map(function (it) { return it.json(); }),
            "quickReplies": this.quickReplies
        });
    };
    return Template;
}());
exports.Template = Template;
