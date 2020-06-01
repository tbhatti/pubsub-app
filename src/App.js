import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksList  from './components/books-list';
import Cart  from './components/cart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pub/Sub example
         
        </a>
      </header>
      <div className="App">
      <div class = "col-md-10 text-center">
        <BooksList></BooksList> 
    </div>
    <div class = "col-md-2">
      <Cart></Cart>
    </div>
      
     
    </div>
    </div>
  );
}

export default App;
