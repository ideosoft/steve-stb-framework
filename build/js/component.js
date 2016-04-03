"use strict";
var Component = (function () {
    function Component() {
    }
    Component.prototype.add = function (child) {
        this.children.push(child);
        child.parent = this;
    };
    return Component;
}());
exports.Component = Component;
