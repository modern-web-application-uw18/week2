import React, { Component } from 'react';
import './App.css';
import Image from './ImageList/ImageList';
import Header from './Header/Header';
import Person from './Person/Person';

class App extends Component {
    renderList() {
      const list = [
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/36/8e/78/variety-of-pinball-machines.jpg",
        "https://s3-ap-southeast-1.amazonaws.com/wwwsecondhandhk/items/pinball-machines-for-sale-0-0-1.jpg",
        "https://s3.amazonaws.com/images.hagerty.com/vehicle/web/1961FerrariCaliforniaMonterey.jpg",
      ]
      const listItems = list.map((f,index) => <img key={index} src={f}/>);
    
      return(
        <div>{listItems}</div>
      );
  }

  state = {
    persons: [
      {name: 'Billy', age:39},
      {name: 'Gina', age: 37},
      {name: 'Grace', age: "6m"}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: "william", age: 29},
      {name: "gina", age: 19},
      {name: "grace", age: 20}
    ]})

  }

  render() {
    return (
      <div className="App">
        <Header />
      {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
      {this.renderList()}
      <div className="MidTitle">
            <h3>In case you missed it</h3>
            <hr />
            <br />
        </div>
        {this.renderList()}
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}/>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
      {/* <Header src={props.name}/>
      <h1> react app </h1>
      <Image src={list[0]} /> */}
      
      <Person name="Billy" age="39"/>
      </div>
    );
  }
}

export default App;
