import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Characters from "./components/Characters";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((Response) => Response.json())
      .then((Response) => setCharacterList(Response.results));
  }, [next]);
  function handleClickrmv() {
    if (next > 1) {
      setNext(next - 1);
    }
  }
  function handleClickadd() {
    if (next < 34) {
      setNext(next + 1);
    }
  }
  return (
    <div className="App">
      <div className="teste"></div>
      <Characters characterList={characterList} />
      <div className="buttons">
        <button onClick={() => handleClickadd()}>Avançar</button>
        <button onClick={() => handleClickrmv()}>Retroceder</button>
      </div>
    </div>
  );
}

export default App;
