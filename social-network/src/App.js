import React, { Component } from 'react';
import './App.css';
import missed from './missed-articles.json';
import your from './your-articles.json';
class App extends Component {

  render(){
	  return (
     <div id='pagecontainer'>
	 <h2>For you</h2>
	 <div id='yourcontainer'>
        {
        your.map(function(yourmapped){
          return <div class="yourarticlediv"><ul><li><h3>{yourmapped.title}</h3></li>
		  <li>{yourmapped.description}</li>
		  <li><a href={yourmapped.link}>Link</a></li>
		  <li>Author: {yourmapped.author.name}</li>
		  <li><img class="authorimage" src={yourmapped.author.image} alt='medium2'/></li>
		  <li>Posted: {yourmapped.postedDate}</li>
		  </ul></div>;
        })
        }
        

      </div>
	  <h2>In case you missed it</h2>
      <div id='missedcontainer'>
      {
      missed.map(function(missedmapped){
        return <div class="missedarticlediv"><ul><li><img class="articleimage" src={missedmapped.image} alt='medium'/></li>
		<li><h3>{missedmapped.title}</h3></li>
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

