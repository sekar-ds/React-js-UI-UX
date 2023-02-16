import { useState } from "react";



function UseForm  ()  {
    const initialCount = 0
    const [count,setcount] = useState(initialCount);

    const decrementCount = () =>{
setcount(count-1);
    }
    
    const incrementCount = () =>{
setcount(count+1);
    }
     const setValue = ()=>{
        setcount(initialCount)
     }
  return {
    count,incrementCount,decrementCount,setValue
  }
    
  
}

export default UseForm
