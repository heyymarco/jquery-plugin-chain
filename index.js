"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default.prototype.chain = function (handler) {
    if (handler) {
        var result = handler.call(this);
        if (result) {
            if (result === this)
                return this;
            return jquery_1.default(result);
        }
    }
    return this;
};
