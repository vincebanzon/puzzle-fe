import './App.css';
import { useState, useEffect } from 'react';

const BASE_API_URL='http://167.71.49.205:4200/api/v1'


function App() {
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/puzzles`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPuzzles(data)
      });
  }, []);

  return (
    <div className="App">
      <div id="puzzle-list-screen">
        <div>
          {
            puzzles.map((puzzle, index) => {
              return <div className="puzzle-app" key={index}>
                <img src={puzzle.img} />
                  {puzzle.name}
                </div>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
