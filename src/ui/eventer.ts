
export class Eventer {

    events: Array<any>;
    
    constructor(){
        this.events = new Array<any>();
    }

    addListener(name : string, callback : any) {
		this.events[name] = this.events[name] || [];
		this.events[name].push(callback);
	}
    
    fire(name : string) {
        var events: any;
        events = this.events[name];
        for (var event of events) {
            event.call();
        }   
    }
    
}