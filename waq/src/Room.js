import React ,{useState} from 'react';
// //import logo from './logo.svg';
// import Room from './Room';
// import './App.css';

function Room() {
  const[islite ,setlite]= useState(true);
  
  return (

    <div>
      This is room Component is  {islite? "lit": "dark" } 
      <br/>
      My Name is Waqar Azeem  
      <br/>
      <button onClick={ }>Toggle Button</button>

    </div>
  );
}

export default Room;
