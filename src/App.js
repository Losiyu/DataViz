import React from 'react'
import Card from './Card'
import "./App.css"
import p2 from "./images/s2.png"


function App() {
  return (
    <div className="App" >
      <div className="page">
        <Card imgPath={p2} description="hello"/>
      </div>
    </div>
  );
}

export default App;
