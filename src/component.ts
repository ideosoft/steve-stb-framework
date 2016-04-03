

export class Component {
    node: HTMLDivElement;

    parent: Component;
    children: Component[];


    constructor() {

    }

    add(child: Component) {

        this.children.push(child);
        child.parent = this;

    }
} 