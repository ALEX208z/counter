
import { useState } from 'react';
import './App.css';

function App() {
    const[count,setCount]=useState(0);

    const incNum =()=>{
      setCount(count+1);
    }


  return (
    <>
     <div className="counter">
      <h1>{count}</h1>
      <button onClick={incNum}>Click to Increase</button>
     </div>
    </>
  );
}

export default App;
