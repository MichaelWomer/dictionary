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
      console.log(response.data)
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
    <div className='searchContainer'>
     <input type='text' placeholder='Enter a word' value={word} onChange={handleWordChange} className='searchBox'></input>
     <button type='submit' onClick={handleSubmit} className='submitButton'><b>Search</b></button>
     </div>
     <div className='resultContainer'>
     { !error  ? 
     <div>
      {result != null ? 
      
      <div className='definitionContainer'>
        <h2>{result.word} ({result.phonetic})</h2>
        {
          result.meanings.map((meaning, index) => {
            return (
              <div>
              <p><b>{meaning.partOfSpeech}</b></p>
              <ul>
              {
                meaning.definitions.map((definition, index) => {
                  return (
                    <li>
                    <p key={index}>{definition.definition}</p>
                    </li>
                  )
                })
              }  
              </ul>
              </div>
            )
          })
        }
      </div>
      
      
      
      : <h1>Enter word a word to view its meanings!</h1>
      
      }
      </div>
    : <h1>Word could not be found. Try again!</h1>
    }
    </div>
     
    </div>
  );
}

export default App;
