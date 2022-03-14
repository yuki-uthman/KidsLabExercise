
function check(myCode, answer) {
    let myCodeString = "\n\tMy code: " + myCode
    let answerString = "\n\tAnswer : " + answer + "\n"
    chai.expect(myCode).to.equal(answer, myCodeString + answerString);
}
