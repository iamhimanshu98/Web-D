# JavaScript Notes

## 1. Null Type

- In JavaScript, `null` is a primitive value representing the intentional absence of any object value.
- **`typeof null`** returns "object", which is a known historical bug in JavaScript.
- Example:
  ```javascript
  console.log(typeof null); // "object"
  console.log(null === null); // true
  console.log(null == null); // true
  let aa = null;
  console.log(aa === null); // true
  ```
- Best practice: Use **strict equality (`===`)** to check for `null`.

## 2. Swap Methods in JavaScript

Swapping values between two variables can be done in different ways:

### Using a Temporary Variable:

```javascript
let a = 4,
  b = 5,
  c;
c = a;
a = b;
b = c;
console.log(a, b); // 5, 4
```

### Using Destructuring (Modern ES6 Method):

```javascript
[a, b] = [b, a];
console.log(a, b); // 4, 5
```

### Using Arithmetic Operations:

```javascript
a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // 5, 4
```

## 3. Grouping in Console

- The `console.group()` method helps organize console output into collapsible groups.
- **Syntax:**
  ```javascript
  console.group("Today's topics");
  console.log("null type");
  console.log("swap methods");
  console.log("grouping in console");
  console.groupEnd();
  ```
- Collapsed group example:
  ```javascript
  console.groupCollapsed("Drinks");
  console.log("Brandy");
  console.log("Tequila");
  console.log("Whiskey");
  console.log("Rosé");
  console.groupEnd();
  ```

## 4. Working with Objects

- Creating an object:
  ```javascript
  const obj = {
    namee: "Him",
    age: 12,
    city: "Jaipur",
  };
  console.log(obj.namee, obj.age); // Him 12
  ```

## 5. Converting String to Number

- Using `Number()`:
  ```javascript
  console.log(typeof Number("56")); // number
  ```
- Using `parseInt()`:
  ```javascript
  console.log(typeof parseInt("56")); // number
  ```
- Using Unary `+` operator:
  ```javascript
  console.log(typeof +"-56"); // number
  ```

## 6. String Methods

- Checking for a substring:
  ```javascript
  const str = "JaaaavaScript";
  console.log(str.includes("S")); // true
  ```
- Finding index of a character:
  ```javascript
  console.log(str.indexOf("S")); // 7
  console.log(str.indexOf("s")); // -1 (not present)
  console.log(str.indexOf("Script") === -1); // false
  ```
- Using `search()` method:
  ```javascript
  console.log(str.search(/a/) === -1); // true, should use RegExp without quotes)
  ```
