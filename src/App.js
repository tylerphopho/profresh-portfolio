import React from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Card/>
      </div>
    </div>
  );
}

export default App;
