

describe('7. multiply the number by 10', function () {
  it('exercise7(1) === 10', function () {
    let myCode = exercise7(1)
    let answer = answer7(1)
    check(myCode, answer)
  });

  it('exercise7(10) === 100', function () {
    let myCode = exercise7(10)
    let answer = answer7(10)
    check(myCode, answer)
  });

});
