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
