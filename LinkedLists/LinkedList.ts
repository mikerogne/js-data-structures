import {Node} from "./Node";

class LinkedList {
    private length: number;
    private head: Node;
    private tail: Node;

    constructor(value: any) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    public append(value: any) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: any) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    public printList(): any[] {
        const array = [];

        let currentNode: Node | null = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

export {LinkedList};
