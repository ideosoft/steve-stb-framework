class Hola {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var hola = new Hola("Hello, world!");
    
document.body.innerHTML = hola.greet();