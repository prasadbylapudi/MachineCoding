// (Macro)task	setTimeout | setInterval | setImmediate
// Microtask	process.nextTick | Promise callback | queueMicrotask


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // Expected output: Array [3, 42, "foo"]
// });
// Promise.all waits for all fulfillments (or the first rejection).

const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1")
    },1000)
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2")
    },100)
})

// Promise.all([promise1,promise2]).then(console.log).catch(console.log)

Promise.myAll=function (promisesArr){
    return new Promise((resolve,reject)=>{
        let results=[];
        let count=0;

        promisesArr.forEach((primise,index)=>{
            primise.then((result)=>{
                results[index]=result;
                count++;
                if(count==promisesArr.length){
                    resolve(results);
                }
            }).catch((err)=>{reject(err)})
        })
    })
}

Promise.myAll([promise1,promise2]).then(console.log).catch(console.log)

