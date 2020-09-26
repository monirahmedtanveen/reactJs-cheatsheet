import React, {useState} from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

function App() {
  const styleTheDiv = {
      backgroundColor: '#ccc',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
  };


  const [authorState, setAuthorState] = useState({
    author: [
      {name: 'Monir Ahmed', publisher: 'Onnoprokash',
        content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
      {name: 'Arya Stark', publisher: 'Game Of Throne',
        content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
      {name: 'Maisie Williamas', publisher: 'Two Weeks To Live',
        content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
    ]
  });

  const changeAuthorHandler = (event) => {
    setAuthorState({
      author: [
        {name: 'Monir Ahmed', publisher: 'Onnoprokash',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
        {name: event.target.value, publisher: 'Game Of Throne',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
        {name: 'Maisie Williamas', publisher: 'Two Weeks To Live',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
      ]
    });
  }

  const changeContentHandler = (event) => {
    setAuthorState({
      author: [
        {name: 'Monir Ahmed', publisher: 'Onnoprokash',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
        {name: 'Arya Stark', publisher: 'Game Of Throne',
          content: event.target.value},
        {name: 'Maisie Williamas', publisher: 'Two Weeks To Live',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
      ]
    });
  }

  const switchAuthorHandler = (author) => {
    setAuthorState({
      author: [
        {name: author, publisher: 'Onnoprokash',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
        {name: 'Arya Stark', publisher: 'Game Of Throne',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
        {name: 'Maisie Williamas', publisher: 'Two Weeks To Live',
          content: 'Ensure that the new input entered by the user overwrites the old username passed to UserOutput Add two-way-binding to your input (in UserInput) to also display the starting username Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets'},
      ]
    });
  }

  return (
    <div className="App" style={styleTheDiv}>
      <h1>ReactJs Base Syntext Assignment</h1>
      <UserOutput click={switchAuthorHandler.bind(this, 'Maisie Williams')} author={authorState.author[0].name} publisher={authorState.author[0].publisher} content={authorState.author[0].content}></UserOutput>
      <UserOutput author={authorState.author[1].name} publisher={authorState.author[1].publisher} content={authorState.author[1].content}></UserOutput>
      <UserOutput author={authorState.author[2].name} publisher={authorState.author[2].publisher} content={authorState.author[2].content}></UserOutput>
      <UserInput changeAuthor={changeAuthorHandler} changeContent={changeContentHandler} author={authorState.author[1].name} content={authorState.author[1].content}></UserInput>
    </div>
  );
}

export default App;
