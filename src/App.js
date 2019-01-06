import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: "Manju", age: "28"},
      {name: "React", age:"29"},
      {name: "CSS", age: "27"}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log("Button Clicked");
    // this.state.persons[0].name = "Natha K"
    this.setState({persons: [
        {name: newName, age: "28"},
        {name: "React", age:"29"},
        {name: "CSS", age: "27"}
      ] 
    })
  }
  
  nameChangedHandler = (event) => {
    this.setState({persons: [
        {name: "Manju", age: "28"},
        {name: event.target.value, age:"29"},
        {name: "CSS", age: "37"}
      ] 
    })
  }

  render() {
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really Working...!!!</p>
        <button style={styleBtn} onClick={() => this.switchNameHandler("Manjunatha K")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Manju K')}
        changed={this.nameChangedHandler}
        >My Hobbies : Coding</Person>
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}></Person>
        <Person 
        name={this.state.persons[2].name}
         age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
