import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
    persons: [
      {id:'qwe32',   name:'Max', age: 28},
      {id:'dsfsds2', name:'Manu', age: 29},
      {id:'23ewsd',  name:'Stephanie', age: 26}
    ],
    otherState:'Some other value',
    showPersons: false

  };
  // switchNameHandler= (newName) => {
  //   //console.log('Was clicked');
  //   //DONT DO THIS this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name:'Manu', age: 29},
  //       {name:'Stephanie', age: 27}
  //     ]});
  // };
  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }
  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons});
  }
  togglePersonsleHandler = () =>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons : !doesShow}) 
  }
  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8 px',
      cursor: 'pointer'
      
    };
    let persons = null;

    if(this.state.showPersons){
       persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}  
              name = {person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)} />
              
            })

          }
   
            </div> 
      );
      style.backgroundColor = 'red';
    
    }
    let classes = [];
    if(this.state.persons.length <= 2 ){
      classes.push('red');
    }
    if (this.state.persons.length <= 1 ){
      classes.push('bold');
    }
    return (
     
        <div className="App">
          <h1>Hi! Im a react APP</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
          style={style}
          onClick={ this.togglePersonsleHandler}>Toggle Persons</button>
          {persons}    
        </div>
   
    );
  }
}


  

  


export default App;


