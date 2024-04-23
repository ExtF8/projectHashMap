import { HashNode } from './HashNode.js';

/**
 * Represents a linked list.
 */
export class LinkedList {
    /**
     * Creates a new instance of LinkedLists.
     * @param {Node} head - The head node of the linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new HashNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.nextNode = newNode;
        this.tail = newNode;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new HashNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    // Returns the total number of nodes in the list
    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.nextNode;
        }

        return count;
    }

    // Returns the first node of the list
    head() {
        return this.head;
    }

    // Returns the last node of the list
    tail() {
        return this.tail;
    }

    // Returns node at the given index
    at(index) {
        let current = this.head;
        let count = 0;

        // Invalid index
        if (index < 0) {
            return null;
        }

        while (current) {
            if (count == index) {
                return current;
            }
            current = current.nextNode;
            count++;
        }

        // If index out of scope
        if (index > count) {
            let errorMessage = `Node at index ${index} does not exist in this list`;
            return errorMessage;
        }
    }

    // Removes the last element from the list
    pop() {
        // List empty
        if (!this.head) {
            return;
        }

        // Is last element
        if (!this.head.nextNode) {
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }

        current.nextNode = null;
        this.tail = current;
    }

    // Returns true if the passed value is in the list otherwise returns false
    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value == value) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value == value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }

        return null;
    }

    // Represents LinkedList objects as strings, to print them
    // The format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        result += 'null';
        return result;
    }

    // Inserts a new node with provided value at the given index
    insertAt(value, index) {
        if (index < 0) {
            return;
        }

        const newNode = new HashNode(value);

        // At the beginning of the list
        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;

            if (!this.tail) {
                this.tail = newNode;
            }

            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }

        if (currentIndex === index) {
            previous.nextNode = newNode;
            newNode.nextNode = current;
            if (!current) {
                this.tail = newNode;
            }
        }
    }

    // Removes the node at the given index
    removeAt(index) {
        if (index < 0 || !this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.nextNode;
            // If the list becomes empty
            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }

        if (currentIndex === index && current) {
            previous.nextNode = current.nextNode;
            // If removed node was tail
            if (!current.nextNode) {
                this.tail = previous;
            }
        }
    }

    // List all nodes
    listAllNodes() {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log(`Current node at index ${index}: `, current);
            current = current.nextNode;
            index++;
        }
    }

    // List all nodes
    listAllNodesValues() {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log(`Value of node at index ${index}: `, current.value);
            current = current.nextNode;
            index++;
        }
    }
}
