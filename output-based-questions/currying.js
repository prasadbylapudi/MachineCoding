
/* 
    write a function that can be invoked like below
    calc().add(10).subtract(5).multiply(20).divide(2).getResult(); 
    final result should be 50.
*/

class Calculator{
    constructor(initialValue=0){
        this.value=initialValue;
    }
    add(num){
        this.value+=num;
        return this;
    }

    subtract(num){
        this.value-=num;
        return this;
    }

    multiply(num){
        this.value*=num;
        return this;
    }

    divide(num){
        this.value/=num;
        return this;
    }

    getResult(){
        return this.value;
    }

}

function calc(){
    return new Calculator();
}

// console.log(calc().add(10).subtract(5).multiply(20).divide(2).getResult());


//2nd way

function calc(){

    let res=0;

    return{
        add(num){
            res+=num;
            return this;
        },

        subtract(num){
            res-=num;
            return this;
        },
        multiply(num){
            res*=num;
            return this;
        },
        divide(num){
            res/=num;
            return this;
        },
        getResult(){
            return res;
        }
    }
}

console.log(calc().add(10).subtract(5).multiply(20).divide(2).getResult());