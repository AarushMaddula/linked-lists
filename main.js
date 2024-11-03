import LinkedList from "./LinkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

list.toString();
