
describe('1. add two numbers', function () {
  it('exercise1(1, 1) === 2', function () {
    let myCode = exercise1(1, 1)
    let answer = answer1(1, 1)
    check(myCode, answer)
  });

  it('exercise1(2, 1) === 3', function () {
    let myCode = exercise1(2, 1)
    let answer = answer1(2, 1)
    check(myCode, answer)
  });

});
