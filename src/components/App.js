import React from "react";
import { useState} from "react";
import './../styles/App.css';

const App = () => {

  const [count,setCounter]=useState(0)
const Increment=()=>{
  setCounter(count+1)

}


  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={Increment}>Click me</button>
    </div>
  )
}

export default App
