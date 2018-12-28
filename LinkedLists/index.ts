import {LinkedList} from "./LinkedList";

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);
console.log(myLinkedList.printList());
// console.log(JSON.stringify(myLinkedList, null, 2));
