it.each([
  null,
  [null],
])('null is null', (value) => {
  expect(value).toBe(null)
})

it.each([
  [null],
])('[null] is null when first item is array', (value) => {
  expect(value).toBe(null)
})

const expected = [null, [null]]
let index = 0
it.each([
  null,
  [null],
])('[null] is [null] then first item is not an array', (value) => {
  expect(value).toStrictEqual(expected[index])
  index++
})

