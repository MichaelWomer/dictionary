import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")

  

  const handleSubmit = () => {
      console.log("fetching word: " + word)
  }

  const handleWordChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <div className="App">
        
     <input type='text' placeholder='Enter word' value={word} onChange={handleWordChange}></input>
     <button type='submit' onClick={handleSubmit}>Submit</button>
      {definition.length > 0 ? <div><h6>{definition}</h6> </div> : <></>} 


     
    </div>
  );
}

export default App;
