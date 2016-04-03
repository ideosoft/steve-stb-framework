import {Eventer} from './eventer';

export class Component extends Eventer {
    
    /** node */
    node: HTMLDivElement;

    /** parent component */
    parent: Component;

    /** childrens */
    children: Array<Component>;


    /** constructor */
    constructor() {
        super();
        
        this.children = new Array<Component>();
        this.node = document.createElement('div');
        this.node.className += ' component'

    }
    
    
    focus(){
        this.node.classList.add('focus');
    }

    /**
     * Add child Component to the Component
     * @param child
     */
    add(child: Component) {
        this.children.push(child);
        child.parent = this;
        
        if ( child.node && child.node.parentNode === null ) {
			this.node.appendChild(child.node);
		}
        
    }
    
    adds(childs: Array<Component>){
        for (var item of childs) {
            this.add(item);
        }   
    }
    
} 
