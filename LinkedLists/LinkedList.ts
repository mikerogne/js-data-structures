import {Node} from "./Node";

class LinkedList {
    private length: number;
    private head?: Node;
    private tail?: Node;

    constructor(value: any) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    public append(value: any) {
        const newNode = new Node(value);

        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    public prepend(value: any) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    public insert(index: number, value: any): boolean {
        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index > this.length - 1) {
            this.append(value);
            return true;
        }

        const newNode = new Node(value);
        const nodeBeforeIndex = this.getNodeBeforeIndex(index);

        if (nodeBeforeIndex != null) {
            newNode.next = nodeBeforeIndex.next;
            nodeBeforeIndex.next = newNode;
            this.length++;

            return true;
        }

        return false;
    }

    public remove(index: number): boolean {
        if (this.head == null) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;

            return true;
        }

        const nodeBefore = this.getNodeBeforeIndex(index);
        if (nodeBefore == null) {
            return false;
        }

        const nodeToRemove = nodeBefore.next;
        if (nodeToRemove != null) {
            nodeBefore.next = nodeToRemove.next;
            this.length--;

            if (nodeToRemove === this.tail) {
                this.tail = nodeBefore;
            }

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
        if (this.head == null) {
            return;
        }

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
