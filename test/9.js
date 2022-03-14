

describe('9. minutes to seconds', function () {
  it('exercise9(1) === 60', function () {
    let myCode = exercise9(1)
    let answer = answer9(1)
    check(myCode, answer)
  });

  it('exercise9(30) === 1800', function () {
    let myCode = exercise9(30)
    let answer = answer9(30)
    check(myCode, answer)
  });

});
