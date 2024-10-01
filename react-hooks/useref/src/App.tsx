import { useState,useRef, useEffect } from 'react'

const list=[];
function App() {

  const [count, setCount] = useState(0);

  const userRef=useRef({name:"prasad",age:23})

  const inputRef=useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  console.log(useRef)

  list.push(userRef)//every useRef have access to useRef

  if(list.length===2){
    console.log(list)
    console.log(list[0]===list[1])
  }

  //with useRef it's not gonna re-render the component

  const updateName=()=>{
    userRef.current.name="gary peterson";
  }

  // const user={name:"prasad",age:"23"};
  //1st render user=#400
  //2nd render user=#600
  //when re-render happes it's store different heap memory location. generally non-primitive data is stored in heap memory.
  //so when we compare two objects it's compare their heap memory location.
  //let's fix this by using the userRef,
  // list.push(user);

  // if(list.length==2){
  //   console.log(list)
  //   console.log(list[0]===list[1])
  // }


  //every react element got attribute called ref, 
  // ref need have current property like this , element ={current:null}

  const element={current:null}  

  useEffect(()=>{
    console.log(element)
  },[])


  return (<><h1>useRef hook</h1>
    <input type="text" ref={inputRef} />
    <button ref={element} onClick={()=>setCount(count+1)}>Click me</button>
    <button onClick={updateName}>update name</button>
    <h2>{count}</h2>
  </>)
    
}

export default App
