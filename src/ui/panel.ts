import {Component} from './component';

export class Panel extends Component {
    
    /** constructor */
    constructor() {
        super();
        
        this.node.className += ' panel';
        
        this.node.addEventListener('keydown', (ev: KeyboardEvent)=>{
            console.log(ev.keyCode);
        });
        
        
    }
} 