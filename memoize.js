
//memoize function
const memoize = () => {
  let cache = {};
  return (num) => {
    if (cache[num]) {
      console.log("with memoize.");
      return cache[num];
    } else {
      console.log("without memoize.");
      cache[num] = num * 2;
      return num * 2;
    }
  };
};

//coostly function.
// const multiply = (num) => {
//   return num * 2;
// };
const res = memoize();
console.log(res(3));
console.log(res(6));
console.log(res(3));
