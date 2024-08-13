import { useEffect, useRef, useState } from "react";

export default function RefDemo() {
    const [counter,setCounter] = useState(0);
    const intialRender = useRef(true);

    useEffect(()=>{
        if(intialRender){
            console.log('Initial render');
            intialRender.current = false;
        } else{
            console.log('Update only');
        } 
    }, [counter])

    return (
       <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(c=> c+1)}>+</button>
            <button onClick={()=> intialRender.current=true}>Reset</button>
       </>
   );
}