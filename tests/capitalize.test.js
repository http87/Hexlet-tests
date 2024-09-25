import { capitalize } from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
  throw new Error("The function doesn't work correctly");
}

if (capitalize('') !== '') {
  throw new Error("The function doesn't work correctly");
}

console.log('Все тесты пройдены!');