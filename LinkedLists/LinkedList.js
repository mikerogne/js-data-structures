"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class LinkedList {
    constructor(value) {
        this.head = new Node_1.Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node_1.Node(value);
        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node_1.Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        if (index > this.length - 1) {
            this.append(value);
            return true;
        }
        const newNode = new Node_1.Node(value);
        const nodeBeforeIndex = this.getNodeBeforeIndex(index);
        if (nodeBeforeIndex != null) {
            newNode.next = nodeBeforeIndex.next;
            nodeBeforeIndex.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    remove(index) {
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
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    getNodeBeforeIndex(index) {
        if (this.head == null) {
            return;
        }
        let i = 0;
        let currentNode = this.head;
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
exports.LinkedList = LinkedList;
