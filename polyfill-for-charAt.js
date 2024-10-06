const str="hello world"


String.prototype.myCharAt=function(index){
    if(index<0){
        return;
    }
    for(let i=0;i<this.length;i++){
        if(i==index){
            return this[i];
        }
    }
}

console.log(str.charAt(4))

console.log(str.myCharAt(4))