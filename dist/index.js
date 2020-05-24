"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.SkillResponse = void 0;
var template_1 = require("./template");
var SkillResponse = /** @class */ (function () {
    // TODO: context type
    function SkillResponse() {
        this.version = "2.0";
        this.context = [];
        this.template = new template_1.Template();
    }
    SkillResponse.prototype.json = function () {
        return ({
            version: this.version,
            template: this.template.json(),
            context: { values: [] }
        });
    };
    return SkillResponse;
}());
exports.SkillResponse = SkillResponse;
var template_2 = require("./template");
__createBinding(exports, template_2, "Output");
__createBinding(exports, template_2, "Card");
__createBinding(exports, template_2, "Cmpnts");
__createBinding(exports, template_2, "QuickReply");
__createBinding(exports, template_2, "Template");
