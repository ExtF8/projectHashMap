import HashNode from './HashNode.js';

/**
 * Represents a linked list.
 */
export default class LinkedList {
    /**
     * Creates a new instance of LinkedLists.
     * @param {Node} head - The head node of the linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adds a new node containing value to the end of the list
    append(key, value) {
        const newNode = new HashNode(key, value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.nextNode = newNode;
        this.tail = newNode;
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
    getHead() {
        return this.head;
    }

    // Returns the last node of the list
    getTail() {
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

    indexOf(key) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.key === key) {
                return index;
            }
            current = current.nextNode;
            index++;
        }

        return -1; // Key not found
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
