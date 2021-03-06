# `var`

## Variable Declaration

In JavaScript `var` is used to declare a variable. When JavaScript sees a variable declaration, it tags a memory location for that variable to store some value.

```javascript
var a;
```

## Default Value

If we just declare a variable using `var` and does not assign any value to it, the default value is `undefined`.

```javascript
var a;
console.log(a); // undefined
```

So, if we need to check if a variable is not initialized, we can do following conditional check.

```javascript
var a;
if (a !== undefined) {
  console.log("a is initialized");
}
```

In the above case, if condition is falsy. That means the log output is not printed.
