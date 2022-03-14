

describe('4. divide two numbers', function () {
  it('exercise4(4, 2) === 2', function () {
    let myCode = exercise4(4, 2)
    let answer = answer4(4, 2)
    check(myCode, answer)
  });

  it('exercise4(15, 3) === 5', function () {
    let a = 15
    let b = 3

    let myCode = exercise4(a, b)
    let answer = answer4(a, b)
    check(myCode, answer)
  });

});
