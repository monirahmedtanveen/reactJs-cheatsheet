import React, { Component, useState } from 'react';
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
      { name: "Menu", age: 28 },
      { name: "Max Plank", age: 32 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Was Clicked!!");
    // DON'T DO THIS => this.state.person[0].name = "Monir Ahmed Tanveen";
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: "Maisie Williams", age: 28 },
        { name: "Arya Stark", age: 35 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "Monir Ahmed", age: 28 },
        { name: "Jannatun Kumu2.ewu", age: 28 },
        { name: event.target.value, age: 35 },
      ]
    })
  }

  render () {
    const styleTheButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const styleTheDiv = {
      backgroundColor: '#ccc',
      font: 'inherit'
    };

    return (
      <div className="App" style={styleTheDiv}>
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button style={styleTheButton}
          onClick={() => this.switchNameHandler('Hello World !!!!')}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}></Person>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}></Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          click={this.switchNameHandler.bind(this, 'Reverted')}
          change={this.nameChangeHandler}>Selling properties for my feeding</Person>
      </div>
    );
      
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'))
  }
}

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     person: [
//       { name: "Monir Ahmed", age: 28 },
//       { name: "Kumu2.ewu", age: 28 },
//       { name: "Alamin Mia", age: 32 },
//     ]
//   });

//   const [otherState, setOterState] = useState('Some other value of state');

//   const switchNameHandler = () => {
//     setPersonsState({
//       person: [
//         { name: "Monir Ahmed", age: 28 },
//         { name: "Jannatun Kumu2.ewu", age: 28 },
//         { name: "Alamin Mia", age: 35 },
//       ]
//     });
//   }

//   console.log(personsState, otherState);

//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.person[0].name} age={personsState.person[0].age}></Person>
//       <Person name={personsState.person[1].name} age={personsState.person[1].age}></Person>
//       <Person name={personsState.person[2].name} age={personsState.person[2].age}>My Hobbies: talking bullshit without any reason and selling properties for my feeding</Person>
//     </div>
//   );
    
//   // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'))
// }

export default App;
