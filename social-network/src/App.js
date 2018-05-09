import React, { Component } from 'react';
import missed from './missed-articles.json';
import your from './your-articles.json';
import './App.css';
class App extends Component {

  render(){
	  return (
    <div>
      <div>
          <h1>For you</h1>
            {
            your.map(function(yourJson){
              return <div class="wrapper">
                <img class="imageName" src={yourJson.image} style={{width: 300, height: 300}}  alt='your-image'/>
                <ul>
                  <li><h2>{yourJson.title}</h2></li>
                  <li>{yourJson.description}</li>
                  <br></br>
                  <img className="image" src={yourJson.author.image} style={{width: 40, height: 40}}  alt='your-image'/>
                  <li>{yourJson.author.name}</li>
                  <li>{yourJson.postedDate} {yourJson.minutesToRead + " min read"} </li>
                </ul>
              </div>;
            })
            }   
      </div>

      <div>
        <br></br>
          <h1>In case you missed it</h1>
            {
            missed.map(function(missedJson){
              return <div class="wrapper">
                
                <img class="imageName" src={missedJson.image} style={{width: 300, height: 200}}  alt='your-image'/>
                <ul>
                <li><h3>{missedJson.title}</h3></li>
                <li>{missedJson.description}</li>
                <img className="image" src={missedJson.author.image} style={{width: 40, height: 40}}  alt='your-image'/>
                  <li>{missedJson.author.name}</li>
                  <li>{missedJson.postedDate} {missedJson.minutesToRead + " min read"} </li>
                </ul>
              </div>;
            })
            }   
      </div>



      
    </div>
	  );
  }
}

export default App;