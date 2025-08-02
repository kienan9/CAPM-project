import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [visits, setVisits] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/visits')
      .then((res) => res.json())
      .then((data) => {
        setVisits(data.visits);
      })
      .catch((err) => {
        console.error('Failed to fetch visits:', err);
      });
  }, []);

 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

	{visits !== null ? (
          <p>Visit Count: {visits}</p>
        ) : (
          <p>Loading visit count...</p>
        )}

        <p>EGL307 Project</p>
        <p>members: Kienan and JingBo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solved OpenSSL problem related to React. 
        </a>
      </header>
    </div>
  );
}

export default App;
