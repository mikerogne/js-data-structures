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

    public insert(index: number, value: any): boolean {
        if (index > this.length - 1) {
            return false;
        }

        const nodeBeforeIndex = this.getNodeBeforeIndex(index);
        if (nodeBeforeIndex) {
            const newNode = new Node(value);
            newNode.next = nodeBeforeIndex.next;
            nodeBeforeIndex.next = newNode;

            return true;
        }

        return false;
    }

    public printList(): any[] {
        const array = [];

        let currentNode: Node | undefined = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    private getNodeBeforeIndex(index: number): Node | undefined {
        let i = 0;
        let currentNode: Node = this.head;

        while (i <= index && currentNode.next != null) {
            if (i === index - 1) {
                return currentNode;
            }

            currentNode = currentNode.next;
            i++;
        }

        return undefined;
    }
}

export {LinkedList};
