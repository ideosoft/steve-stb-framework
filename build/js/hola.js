var Hola = (function () {
    function Hola(greeting) {
        this.greeting = greeting;
    }
    Hola.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Hola;
}());
;
var hola = new Hola("Hello, world!");
document.body.innerHTML = hola.greet();
