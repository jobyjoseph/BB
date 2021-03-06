Boolean represents a logical entity. Logical entities are used to write conditions and enable branching in the program. There are only 2 values in JavaScript that are of Boolean type. They are `true` and `false`.

```javascript
// Branching
if (true) {
  console.log("I am truthy");
} else {
  console.log("I will never be logged");
}
```

## Falsy values

When we use any data types as a logical entity, JavaScript automatically converts that value to a boolean `true` or `false`. For example, in the following snippet we use `"hello"` as a logical entity.

```javascript
if ("hello") {
  console.log("hello is true");
} else {
  console.log("hello is false");
}
```

Here the output is `"hello is true"`. It is because, JavaScript automatically converts a non-empty string to a `true`. There are some values, when converted to boolean, results in `false`. Those values are called _falsy values_. They are:

- `0`
- `-0`
- `null`
- `false` Obviously
- `NaN`
- `undefined`
- `""` Empty string

All other values in JavaScript are truthy values.

> An empty object `{}` and empty array `[]` are truthy values. It is not falsy like an empty string.

> The string "false" is a non-empty string. So when it is converted to boolean, it is a truthy value.

## Converting any value to boolean

We can convert any value in JavaScript to boolean type. This can be done using 2 techniques.

### `Boolean` function

We can use `Boolean` function to convert any values to boolean type.

```javascript
console.log(Boolean("A string")); // true
console.log(Boolean(""));         // false
console.log(Boolean(0));          // false
console.log(Boolean({}));         // true
```

### `!!` Double negation

In JavaScript `!` can be used as a NOT operator. In Mathematics, if we have a number `23`, negating it results in `-23`. Again negating it reverts it back to `23`. In similar way, in JavaScript when using `!`, it negates the value and the output is a boolean value.

Here is an example. We know that, a non-empty string is a truthy value. Let us do a single negation first.

```javascript
console.log(!"hello"); // false
```

We use this behaviour of `!` to convert a value to boolean type by negating again.

```javascript
console.log(!!"hello"); // true
```