import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <Person name="Monir Ahmed" age="28"></Person>
      <Person name="Kumu2.ewu" age="28"></Person>
      <Person name="Alamin" age="32">My Hobbies: talking bullshit without any reason</Person>
    </div>
  );

  // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'))
}

export default App;
