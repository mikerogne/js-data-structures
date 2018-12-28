import {LinkedList} from "./LinkedList";

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log("Before inserts", myLinkedList.printList());
myLinkedList.insert(2, 100);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log("After inserts", myLinkedList.printList());
