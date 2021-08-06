const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

test("basic", () => {
  expect(sum()).toBe(0);
})

test("1+1=2", () => {
  expect(sum(1,1)).toBe(2);
})