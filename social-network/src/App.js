import React, { Component } from 'react';
import './App.css';
import missed from './missed-articles.json';
import your from './your-articles.json';
class App extends Component {

  render(){
	  return (
     <div>
	 <div>
      <h3>For you</h3>
        {
        your.map(function(yourmapped){
          return <div class="articlediv"><ul><li>{yourmapped.title}</li></ul></div>;
        })
        }
        

      </div>
      <div>
      <h3>In case you missed it</h3>
      {
      missed.map(function(missedmapped){
        return <div class="articlediv"><ul><li><img class="articleimage" src={missedmapped.image} alt='medium'/></li>
		<li>{missedmapped.title}</li>
        <li>{missedmapped.description}</li>
	  <li><a href={missedmapped.link}>Link</a></li>
	  <li>Author: {missedmapped.author.name}</li>
	  <li><img class="authorimage" src={missedmapped.author.image} alt='medium2'/></li>
	  <li>Posted: {missedmapped.postedDate}</li>
	  <li>{missedmapped.minutesToRead} min read</li>
	  </ul></div>;
      })
      }
      
      </div>
      
      </div>
	  );
  }
}

export default App;

