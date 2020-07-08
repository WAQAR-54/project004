import React ,{useState} from 'react';
import './Room.css';
// //import logo from './logo.svg';
// import Room from './Room';
// import './App.css';

function Room() {
  let [islit, setlit]= useState(false);
  let [age,setAge]=useState(24);
 
    // function updatelit() {
    
    //   console.log("button touchrs")
    //   setlit(!islit); 
    // }
    // function updateage(){
    //   setAge(++Age);
    // }
    //let Hello='Hello'+ islit+'word';
    //let Hello='Hello ${islit} word';


  return (
    <div className={"room " + (islit? "lit":"dark") }>
      This is room Component is  {islit? "lit": "dark" } 
      <br/>
      My Name is Waqar Azeem  
      <br/>
      My Age :  {age} 
      <br/>
      <button onClick={()=> setlit(!islit)} > Toggle Button</button>
      <br/>
      <button onClick={()=> setAge(++age)} > Age Shuffle</button>
    </div>
  );
}

export default Room;
