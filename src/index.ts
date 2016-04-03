import {Panel} from './ui/panel'; 
import {Button} from './ui/button'; 

import {Eventer} from './ui/eventer'; 

var panel1 = new Panel();
var button1 = new Button("Botton 1");
var button2 = new Button("Button 2");

var panel2 = new Panel();
var button3 = new Button("Botton 3");
var button4 = new Button("Button 4");


panel1.add(button1);
panel1.add(button2);
panel1.add(new Button("test3"));

panel2.adds([button3, button4]);


document.body.appendChild(panel1.node);
document.body.appendChild(panel2.node);


button3.focus();

var e = new Eventer();
e.addListener('test',   ()=>{alert('saluda')});
e.addListener('test',   ()=>{alert('pringaillo')});
e.addListener('test',   ()=>{alert('mamon!')});

e.addListener('gorila', ()=>{alert('gorilla')});

e.fire('test');
e.fire('test');



console.log("juan gome");

