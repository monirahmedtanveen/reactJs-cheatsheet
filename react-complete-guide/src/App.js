import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       <p>This is really working</p>
//       <Person name="Monir Ahmed" age="28"></Person>
//       <Person name="Kumu2.ewu" age="28"></Person>
//       <Person name="Alamin" age="32">My Hobbies: talking bullshit without any reason</Person>
//     </div>
//   );

//   // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'))
// }

class App extends Component {
  state = {
    person: [
      { name: "Monir Ahmed", age: 28 },
      { name: "Kumu2.ewu", age: 28 },
      { name: "Alamin Mia", age: 32 },
    ]
  }

  render () {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>My Hobbies: talking bullshit without any reason and selling properties for my feeding</Person>
      </div>
    );
      
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'))
  }
}

export default App;
