/**
 * Represents a node in a hash map.
 */
export default class HashNode {
    /**
     * Creates a new instance of HashNode.
     * @param {*} key - The key associated with the value.
     * @param {*} value - The value to be stored in the node.
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}
