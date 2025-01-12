import { v6 as uuidv6 } from 'uuid';

console.log('Hello, Tailwind with Vanilla JS!');

// Implement the feature of prototype
String.prototype.trueLength = function () {
	if (typeof this !== 'string')
		throw new TypeError('trueLength can only be called on strings.');
	// Use a regex to remove non-alphanumeric characters and return the length
	return this.replace(/[^a-zA-Z0-9]/g, '').length;
};

const msg = 'Hi, hello world app';
const greet = '    hello   ';
console.log(msg.trueLength());
console.log(greet.trueLength());

Array.prototype.customForEach = function (cb) {
	// Validate the callback type
	if (typeof cb !== 'function') {
		throw new TypeError('The callback provided is not a function! 😄');
	}
	// Use 'this' to access the array and iterate
	let length = this.length;
	for (let i = 0; i < length; i++) {
		// Safeguard against sparse arrays
		if (i in this) {
			cb(this[i], i, this);
		}
	}
};

Array.prototype.customMap = function (callback) {
	// Check if the provided argument is a function
	if (typeof callback !== 'function') {
		throw new TypeError('The provided argument must be a function');
	}
	// Create a new array to store the results
	const result = [];

	for (let i = 0; i < this.length; i++) {
		// Skip sparse array holes like undefined,empty
		if (i in this) {
			// Call the callback with (currentValue, index, array)
			result.push(callback(this[i], i, this));
		}
	}
	// Return the new array
	return result;
};

// const scores = [21, 56, , , , , 78, 90, 45, 34];
const scores = [21, 56, , 78, 90, 45, 34];
const nums = [2, 3, 8, 10];

const doubleScore = nums.customMap((num) => {
	return num * 2;
});
console.log(doubleScore);

scores.customForEach((score, index, _scores) => {
	console.log(`${score} - ${index} - ${_scores}`);
});
