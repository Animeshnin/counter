import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <div className="counter">
            <div className="count">
                <p>{count}</p>
            </div>
            <div className="count__button">
                <button
                    onClick={e => setCount(count - 1)} className="button button__minus">
                    Минус
                </button>
                <button onClick={e => setCount(count + 1)} className="button button__plus">
                    Плюс
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
