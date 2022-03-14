

describe('5. add 1 to the number', function () {
  it('exercise5(1) === 2', function () {
    let myCode = exercise5(1)
    let answer = answer5(1)
    check(myCode, answer)
  });

  it('exercise5(10) === 11', function () {
    let myCode = exercise5(10)
    let answer = answer5(10)
    check(myCode, answer)
  });

});
