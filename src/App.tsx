import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App main">
        <h1 style={{textAlign:'center'}}>Tic-Tac-Toe</h1>
        <h2 style={{textAlign:'center'}}>X O</h2>
        <div className='box' style={{border:'1px solid black'}}>
            <Rect disp='X' />
            <Rect disp='O' />
            <Rect disp='_' />
        </div>
    </div>
  );
}

function Rect({disp} : {disp : 'X' | 'O' | '_'}){
    return (<div className='rect'>
    {disp}
    </div>)
}

export default App;
