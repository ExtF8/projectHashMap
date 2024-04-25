import HashMap from './HashMap.js';

// Instantiate a new HashMap
const map = new HashMap();

// Test adding key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
map.set('key4', 'value4');
map.set('key5', 'value5');
map.set('key6', 'value6');
map.set('key7', 'value7');
map.set('key8', 'value8');
map.set('key9', 'value9');
map.set('key10', 'value10');

// Test getting a value by key
const value1 = map.get('key1');
console.log('Value for key1:', value1); // Expected: 'value1'

// Test updating a value
map.set('key2', 'updatedValue');
const updatedValue2 = map.get('key2');
console.log('Updated value for key2:', updatedValue2); // Expected: 'updatedValue'

// Test removing a key-value pair
const removedValue3 = map.get('key3');
map.remove('key3');
console.log('Removed value for key3:', removedValue3); // Expected: null

// Test checking if a key exists
const hasKey1 = map.has('key1');
console.log('Does map have key1?', hasKey1); // Expected: true

// Test checking if a key doesn't exist
const hasKey3 = map.has('key3');
console.log('Does map have key3?', hasKey3); // Expected: false

// Test getting all keys
const allKeys = map.keys();
console.log('All keys in the map:', allKeys); // Expected: ['key1', 'key2', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10']

// Test getting all values
const allValues = map.values();
console.log('All values in the map:', allValues); // Expected: ['value1', 'updatedValue', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9', 'value10']

// Test getting the size of the map
const mapSize = map.length();
console.log('Size of the map:', mapSize); // Expected: 9

// All buckets
console.log(map.buckets)