import {LinkedList} from "./LinkedList";

const myLinkedList = new LinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);

console.log("Before inserts", myLinkedList.printList());
myLinkedList.insert(2, 20);
myLinkedList.insert(2, 21);
console.log("After inserts", myLinkedList.printList());
myLinkedList.remove(0);
console.log("remove(0)", myLinkedList.printList());
myLinkedList.remove(4);
console.log("remove(4)", myLinkedList.printList());
myLinkedList.remove(500);
console.log("remove(500)", myLinkedList.printList());
console.log(myLinkedList);
console.log("Final", myLinkedList.printList());
