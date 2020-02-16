import React from 'react';
import './App.css';

function App() {
  function handleChange(e) {
    const degres = parseFloat(e.target.value);
    if (!isNaN(degres)) {
      const densite = 1 + degres * 4 / 1000;
      document.getElementById("densite").innerHTML = '' + densite;
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Conversion Brix</h2>
      </header>
      <div className="App-body">
      <br/>
        <label for="brix" className="App-label"> Degrés Brix : </label>
        <input type="text" name="brix" placeholder="Valeur en degré brix" onChange={handleChange}></input>
        <br/><br/>
        <div><label className="App-label">Densité : </label>
        <span id="densite"></span></div>
        </div>
    </div>
  );
}

export default App;
