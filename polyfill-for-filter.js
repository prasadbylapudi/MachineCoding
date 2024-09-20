
const arr = [1, 2, 3, 4, 5,6,7,8];

const output = arr.filter((ele)=>ele%2==0);

// console.log(output)
Array.prototype.myFilter = function (cb) {
    let res=[]
    // console.log(this)
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i])
        }
    }
    return res;
};

const output1 = arr.myFilter((ele)=>ele%2!=0);

console.log(output1);
