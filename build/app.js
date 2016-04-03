var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("ui/eventer", ["require", "exports"], function (require, exports) {
    "use strict";
    var Eventer = (function () {
        function Eventer() {
            this.events = new Array();
        }
        Eventer.prototype.addListener = function (name, callback) {
            this.events[name] = this.events[name] || [];
            this.events[name].push(callback);
        };
        Eventer.prototype.fire = function (name) {
            var events;
            events = this.events[name];
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event = events_1[_i];
                event.call();
            }
        };
        return Eventer;
    }());
    exports.Eventer = Eventer;
});
define("ui/component", ["require", "exports", "ui/eventer"], function (require, exports, eventer_1) {
    "use strict";
    var Component = (function (_super) {
        __extends(Component, _super);
        /** constructor */
        function Component() {
            _super.call(this);
            this.children = new Array();
            this.node = document.createElement('div');
            this.node.className += ' component';
        }
        Component.prototype.focus = function () {
            this.node.classList.add('focus');
        };
        /**
         * Add child Component to the Component
         * @param child
         */
        Component.prototype.add = function (child) {
            this.children.push(child);
            child.parent = this;
            if (child.node && child.node.parentNode === null) {
                this.node.appendChild(child.node);
            }
        };
        Component.prototype.adds = function (childs) {
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var item = childs_1[_i];
                this.add(item);
            }
        };
        return Component;
    }(eventer_1.Eventer));
    exports.Component = Component;
});
define("ui/panel", ["require", "exports", "ui/component"], function (require, exports, component_1) {
    "use strict";
    var Panel = (function (_super) {
        __extends(Panel, _super);
        /** constructor */
        function Panel() {
            _super.call(this);
            this.node.className += ' panel';
            this.node.addEventListener('keydown', function (ev) {
                console.log(ev.keyCode);
            });
        }
        return Panel;
    }(component_1.Component));
    exports.Panel = Panel;
});
define("ui/button", ["require", "exports", "ui/component"], function (require, exports, component_2) {
    "use strict";
    var Button = (function (_super) {
        __extends(Button, _super);
        /** constructor */
        function Button(value) {
            _super.call(this);
            this.node.className += ' button';
            this.node.innerText = value;
        }
        return Button;
    }(component_2.Component));
    exports.Button = Button;
});
define("index", ["require", "exports", "ui/panel", "ui/button", "ui/eventer"], function (require, exports, panel_1, button_1, eventer_2) {
    "use strict";
    var panel1 = new panel_1.Panel();
    var button1 = new button_1.Button("Botton 1");
    var button2 = new button_1.Button("Button 2");
    var panel2 = new panel_1.Panel();
    var button3 = new button_1.Button("Botton 3");
    var button4 = new button_1.Button("Button 4");
    panel1.add(button1);
    panel1.add(button2);
    panel1.add(new button_1.Button("test3"));
    panel2.adds([button3, button4]);
    document.body.appendChild(panel1.node);
    document.body.appendChild(panel2.node);
    button3.focus();
    var e = new eventer_2.Eventer();
    e.addListener('test', function () { alert('saluda'); });
    e.addListener('test', function () { alert('pringaillo'); });
    e.addListener('test', function () { alert('mamon!'); });
    e.addListener('gorila', function () { alert('gorilla'); });
    e.fire('test');
    e.fire('test');
    console.log("juan gome");
});
