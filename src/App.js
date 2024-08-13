import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [word, setWord] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)

  

  const handleSubmit = () => {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then(response => {
      setResult(response.data[0])
      setError(false)
    })
    .catch(error => {
        setError(true)
    });
  }

  const handleWordChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <div className="App">
        
     <input type='text' placeholder='Enter word' value={word} onChange={handleWordChange}></input>
     <button type='submit' onClick={handleSubmit}>Submit</button>
     { !error  ? 
     <div>
      {result != null ? 
      
      <div>
        <h2>{result.word} ({result.phonetic})</h2>
        {
          result.meanings.map((meaning, index) => {
            return (
              <div>
              <p><b>{meaning.partOfSpeech}</b></p>
              {
                meaning.definitions.map((definition, index) => {
                  return (
                    <p key={index}>{definition.definition}</p>
                  )
                })
              }  
              </div>
            )
          })
        }
      </div>
      
      
      
      : <h1>Enter word a word to view its data!</h1>
      
      }
      </div>
    : <h1>Word could not be found. Try again!</h1>
    }
     
    </div>
  );
}

export default App;
