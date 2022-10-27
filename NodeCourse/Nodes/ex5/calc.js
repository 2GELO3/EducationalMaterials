function sum (a, b) {
  return a + b
}

function sub (a, b) {
  return a - b
}


exports.func1 = sum
exports.func2 = sub


//  let exports = {
//   func1: sum,
//   func2: sub
// }

// exports.func1(1, 2)
// exports.func2(2, 1)

