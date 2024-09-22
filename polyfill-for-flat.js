const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


function flatArray(arr,depth){
    if(depth==0){
        return arr;
    }
    const temp = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            const result=flatArray(arr[i],depth-1);
            temp.push(...result);
        }
        else{
            temp.push(arr[i]);
        }
    }
    return temp;
}

const output=flatArray([0, 1, 2, [3, 4]],2);
console.log("custom flat function:",output);