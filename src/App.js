import React from 'react';
import './App.css';
import Auth from '../firebase-react-byte/src/components/Auth.jsx';

function App() {
  return (
   <div className="App">
     <p>Usuario: </p>
     <Auth />
   </div>
  );
}

export default App;

