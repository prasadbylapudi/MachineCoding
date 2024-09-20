
const arr = [1, 2, 3, 4, 5];


const output1 = arr.reduce((acc, ele) => {
    acc=acc+ele;
    return acc; 
}, 10);  

// console.log(output1)

Array.prototype.myReduce=function(cb,initialValue){
    let res=initialValue
    console.log(this)
    for(let i=0;i<this.length;i++){
        res=cb(res,this[i]);
        // console.log(res)
    }
    return res;
}

const output2=arr.myReduce((sum,el)=>{return sum+el},0)

console.log(output2)