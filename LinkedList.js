import Node from "./Node.js";

export default function () {
  let headNode = null;
  let tailNode = null;

  const append = (value) => {
    const node = Node();
    node.value = value;

    if (!headNode) {
      headNode = node;
    } else {
      tailNode.nextNode = node;
    }

    tailNode = node;
  };

  const prepend = (value) => {
    const node = Node();
    node.value = value;

    if (headNode) {
      node.nextNode = headNode;
    }

    headNode = node;
  };

  const size = () => {
    let currentNode = headNode;
    let size = 0;

    while (currentNode) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return size;
  }

  const head = () => {
    return headNode;
  }

  const tail = () => {
    return tailNode;
  }

  const at = (index) => {
    let currentNode = headNode;
    let currentIndex = 0;

    if (!currentNode) throw new Error("Linked List is empty!");
    if (index < 0) throw new Error("Index is Too Low!");


    while (currentIndex < index) {
      if (!currentNode) throw new Error("Index Exceeds Linked List Size!");

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  const pop = () => {
    let currentNode = headNode;

    if (!currentNode) throw new Error("Linked List is empty!");

    while (currentNode.nextNode !== tailNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
    tailNode = null;
  }

  const contains = value => {
    let currentNode = headNode;

    if (!currentNode) throw new Error("Linked List is empty!");

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  const find = value => {
    let currentNode = headNode;
    let currentIndex = 0; 

    if (!currentNode) throw new Error("Linked List is empty!");

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode ? currentIndex : null;
  }

  const toString = () => {
    let currentNode = headNode;
    let string = "";

    while (currentNode) {
      string = string.concat(`( ${currentNode.value} ) -> `);
      currentNode = currentNode.nextNode;
    }

    string = string.concat("null");

    console.log(string);
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString
  };
}
