const boatsToSavePeople = require("./boatsToSavePeople");

test("1", () => {
  expect(boatsToSavePeople([1, 2], 3)).toEqual(1);
});

test("1", () => {
  expect(boatsToSavePeople([3, 2, 2, 1], 3)).toEqual(3);
});

test("1", () => {
  expect(boatsToSavePeople([3, 5, 3, 4], 5)).toEqual(4);
});
