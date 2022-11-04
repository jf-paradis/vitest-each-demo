# vitest-each-demo

## description
There's an difference between the specifications of `jest-each` and `vitest`.

With `jest-each`:
- *when first item is an array* then all arrays are parameter lists.
- *when first item is not an array*, then all arrays are arrays.
 
With `vitest`:
- *if any item is an array* then its content is a parameter list.

## analysis
This test in the `vitest` specs fails on `jest`:
```js
test.each([
  null,
  [null], // <-- vitest sees `null`, jest sees `[null]`
])('null is null', (value) => {
  expect(value).toBe(null)
})
```

## repro
This repo illustrate the difference in behavior:
https://github.com/jf-paradis/vitest-each-demo

```bash
npm install
npm unit:jest // to run tests under jest
npm unit:vitest // to run tests under vitest
```
