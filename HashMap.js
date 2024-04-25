import HashNode from './HashNode.js';
import LinkedList from './LinkedList.js';

export default class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.size = 0;
        this.loadFactor = loadFactor;
        // Fills each element of the array with the value.
        // To ensure that the array has been allocated memory.
        this.buckets = new Array(this.capacity).fill(null);
    }

    // Takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        hashCode = hashCode % this.capacity;

        return hashCode;
    }

    // Takes a key and a value and assigns the value to the key in the HashMap.
    // If the key already exists, update the value.
    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new HashNode(key, value);
            this.size++;
        } else {
            // If bucket is LinkedList and contains nodes add new
            if (this.buckets[index] instanceof LinkedList) {
                this.buckets[index].append(key, value);
                this.size++;
            } else {
                // Create a new LinkedList and append existing node and new node
                const linkedList = new LinkedList();
                linkedList.append(
                    this.buckets[index].key,
                    this.buckets[index].value
                );
                linkedList.append(key, value);
                this.buckets[index] = linkedList;
                this.size++;
            }
        }
    }

    // Takes a key and returns the corresponding value from the HashMap.
    // If the key is not found, return null.
    // Uses a linked list for collision resolution.
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            // Check if current bucket is a Linked List
            let currentNode =
                bucket instanceof LinkedList ? bucket.head : bucket;
            while (currentNode) {
                if (currentNode.key === key) {
                    return currentNode.value;
                }

                currentNode = currentNode.nextNode;
            }
            return null;
        }
    }

    // Checks if a given key exists in the HashMap.
    // Returns true if the key is found, else return false.
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket) {
            // Check if current bucket is a Linked List
            let currentNode =
                bucket instanceof LinkedList ? bucket.head : bucket;
            while (currentNode) {
                if (currentNode.key === key) {
                    return true;
                }
                currentNode = currentNode.nextNode;
            }
        }

        return false;
    }

    // Removes the entry with the given key from the HashMap.
    // Return true if the key was found and removed, else return false.
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket) {
            return false;
        }

        if (bucket instanceof LinkedList) {
            console.log('head start:', bucket.head);

            const indexToRemove = bucket.indexOf(key);

            bucket.removeAt(indexToRemove);
            this.size--;

            // If bucket has only one node left, convert it to HashNode
            if (bucket.size() === 1) {
                const head = bucket.getHead();
                this.buckets[index] = new HashNode(head.key, head.value);
                console.log('head new:', bucket.head);
            }
            return true;
        } else if (bucket.key === key) {
            this.buckets[index] = null;
            this.size--;
            return true;
        }

        return false;
    }

    // Returns the number of stored keys in HashMap.
    length() {
        return this.size;
    }

    // Removes all entries from the HashMap.
    clear() {
        this.buckets.fill(null);
        this.size = 0;
    }

    // Returns an array containing all the keys in the HashMap.
    keys() {
        const arrayWithKeys = [];

        for (const bucket of this.buckets) {
            if (bucket instanceof LinkedList) {
                let currentNode = bucket.head;
                while (currentNode) {
                    arrayWithKeys.push(currentNode.key);
                    currentNode = currentNode.nextNode;
                }
            } else if (bucket instanceof HashNode) {
                arrayWithKeys.push(bucket.key);
            }
        }

        return arrayWithKeys;
    }

    // Returns an array containing all the values in the HashMap.
    values() {
        const arrayWithValues = [];

        for (const bucket of this.buckets) {
            if (bucket instanceof LinkedList) {
                let currentNode = bucket.head;
                while (currentNode) {
                    arrayWithValues.push(currentNode.value);
                    currentNode = currentNode.nextNode;
                }
            } else if (bucket instanceof HashNode) {
                arrayWithValues.push(bucket.value);
            }
        }

        return arrayWithValues;
    }

    // Returns an array containing each key-value pair in the HashMap as nested arrays.
    entries() {
        const arrayWithKeys = [];

        for (const bucket of this.buckets) {
            if (bucket instanceof LinkedList) {
                let currentNode = bucket.head;
                while (currentNode) {
                    arrayWithKeys.push(currentNode.key);
                    currentNode = currentNode.nextNode;
                }
            } else if (bucket instanceof HashNode) {
                arrayWithKeys.push(bucket.key);
            }
        }

        return arrayWithKeys;
    }
}
