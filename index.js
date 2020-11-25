"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makePlugin($) {
    if ($ && (typeof $ == "function")) {
        $.prototype.chain = function (handler) {
            return $(handler ? (handler.call(this) || this) : this);
        };
        return $;
    }
    return null;
}
exports.default = makePlugin;
if (jQuery)
    makePlugin(jQuery);
