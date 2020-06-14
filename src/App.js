import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className={`box ${isMorning ? 'dayLight': ''}`}>
      <header className="App-header">
        <h1>Good {isMorning ? 'Morning':'Night'}</h1>
        <Message counter={count}></Message>
        <button onClick={() => setCount(++count)}>Button</button>

        <button onClick={()=>setMorning(!isMorning)}>Mode</button>
      </header>
    </div>
    );
  }
  
  export default App;
  