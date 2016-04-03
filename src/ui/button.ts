import {Component} from './component';

export class Button extends Component {
    
    /** constructor */
    constructor(value: string) {
        super();
        
        this.node.className += ' button';
        this.node.innerText = value;
    }
    
} 