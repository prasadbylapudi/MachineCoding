
const arr1 = [1, 2, 3, 4, 5];

// arr1.forEach((ele) => {
//   console.log(ele);
// });
//need to implement polyfill for forEach.
function printN(el) {
  console.log(el);
}
Array.prototype.myforEach = function (cb) {
  console.log(this); //this refers to array.
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

arr1.myforEach(printN);
