import React from 'react';
import './App.module.css';
import Scoreboard from './Scoreboard/index';
import QuestionCard from './QuestionCard/index';

function App() {
  return (
    <div className="App">
       {/* <img className='mood' src={require(".././image/background.jpeg")} alt='hello' />  */}

       <p className='help'>ROCK QUIZ</p>
       <img className='mood' src={require(".././image/mike.png")} alt='hello' /> 
      <QuestionCard />
       <img className='spirit' src={require(".././image/guitar.png")} alt='hello' /> 
       <div className='top'>
      <Scoreboard />
      </div>
    </div>
  );
}

export default App;
