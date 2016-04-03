import {Component} from './component';

export class Button extends Component {
    
    
    
    /** constructor */
    constructor(value: string) {
        super();
        
        this.node.className += ' input';
        this.node.innerText = value;
    }
    
} 