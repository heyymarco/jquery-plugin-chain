"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
(function ($) {
    $.prototype.chain = function (handler) {
        return $(handler ? (handler.call(this) || this) : this);
    };
}(jquery_1.default));
