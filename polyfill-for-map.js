
const arr = [1, 2, 3, 4, 5];

//forEach vs map
//map returns new array.
//for Each returns undefined.
//forEach: Since it returns undefined, you cannot chain other array methods like filter, reduce, or map after it.
//map: Returns a new array, so it allows chaining with other array methods.

const output = arr.map((ele, i) => {
  return ele * 2;
});

// console.log(output);

Array.prototype.myMap = function (cb) {
  let res = [];
  console.log(this);

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const output1 = arr.myMap((ele) => ele * 2);

console.log(output1);
