import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {

function initialCounter(){
  console.log("initial counter called")
  return 3;
}
//  const [counter,setCounter]=useState({count:4,theme:'blue'});
// const [counter,setCounter]=useState(()=>initialCounter());
const [counter,setCounter]=useState(1);
const [counterArray,setCounterArray]=useState([1,2,3]);

function counterChange(){
   setCounterArray(prevState=>[...prevState,4])
}

 function decrement(){
   setCounter(prevState=>prevState-1)
 }
 function increment(){
  setCounter(prevState=>prevState+1)
 }
// function decrement(){
//      setCounter(prevState=>{
//         return{...prevState,count:prevState.count-1};
//      })
//    }
// function increment(){
//     setCounter(prevState=>{
//         return{...prevState,count:prevState.count+1};
//     })
//    }

  
  return (
    <>
     <button onClick={decrement}>-</button>
     {/* <span>{counter.count}</span>
     <span>{counter.theme}</span> */}
     <span>{counter}</span>
     <button onClick={increment}>+</button>
     <br/>
     
     <button onClick={counterChange}>Array</button>
     <span>{counterArray}</span>
    </>
  );
}

export default App;
