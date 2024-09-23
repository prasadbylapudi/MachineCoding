
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise1");
    },1000)
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise2");
    },100)
})  

Promise.allSettled([promise1,promise2]).then(console.log).catch(console.log)

Promise.myallSettled=function (promisesArr){
    return new Promise((resolve,reject)=>{

        let results=[];
        let count=0;
        if (promisesArr.length === 0) {
            return resolve([]);
        }
        promisesArr.forEach((promise,index)=>{
            promise.then((result)=>{
                result[index]= result;
                count++;
                if(count==promisesArr.length){
                    resolve(results);
                }
            }).catch((err)=>{
                results[index]=err;
                count++;
                if(count==promisesArr.length){
                    resolve(results);
                }
            })
        })
    })
}

Promise.myallSettled([promise1,promise2]).then((results)=>{
    console.log("results:",results)
})

