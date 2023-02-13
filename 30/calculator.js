function add(firstNo, secondNo) {
  return firstNo + secondNo;
}

function sub(firstNo, secondNo) {
  return firstNo - secondNo;
}

function mul(firstNo, secondNo) {
  return firstNo * secondNo;
}

function div(firstNo, secondNo) {
  return firstNo / secondNo;
}

const calculate = (firstNo, secondNo, cb) => cb(firstNo, secondNo);
console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));
console.log(calculate(10, 5, mul));
console.log(calculate(10, 5, div));
