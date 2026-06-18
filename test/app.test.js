const assert = require("assert");
const { add, multiply, divide } = require("../src/app");

// Test add
assert.strictEqual(add(2, 3), 5, "add(2,3) doit retourner 5");
assert.strictEqual(add(-1, 1), 0, "add(-1,1) doit retourner 0");

// Test multiply
assert.strictEqual(multiply(3, 4), 12, "multiply(3,4) doit retourner 12");
assert.strictEqual(multiply(0, 99), 0, "multiply(0,99) doit retourner 0");

// Test divide
assert.strictEqual(divide(10, 2), 5, "divide(10,2) doit retourner 5");
assert.throws(() => divide(5, 0), /Division par zéro/, "divide par 0 doit lever une erreur");

console.log("Tous les tests sont passés ✓");
