export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.size = 0;
        this.loadFactor = loadFactor;
        // Fills each element of the array with the value.
        // To ensure that the array has been allocated memory.
        this.buckets = new Array(this.capacity).fill(null);
    }

    // Takes a key and produces a hash code with it.
    hash(key) {}

    // Takes a key and a value and assigns the value to the key in the HashMap.
    // If the key already exists, update the value.
    set(key, value) {}

    // Takes a key and returns the corresponding value from the HashMap.
    // If the key is not found, return null.
    get(key) {}

    // Checks if a given key exists in the HashMap.
    // Returns true if the key is found, else return false.
    has(key) {}

    // Removes the entry with the given key from the HashMap.
    // Return true if the key was found and removed, else return false.
    remove(key) {}

    // Returns the number of stored keys in HashMap.
    length() {}

    // Removes all entries from the HashMap.
    clear(){}

    // Returns an array containing all the keys in the HashMap.
    keys(){}

    // Returns an array containing all the values in the HashMap.
    values(){}

    // Returns an array containing each key-value pair in the HashMap as nested arrays.
    entries(){}

}
