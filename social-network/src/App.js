import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import articles from './Articles/your-articles';
import missedArticles from './Articles/missed-articles';

console.log(articles, missedArticles)

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

  render() {
    return (
      <div className="App">
        <Header />
    
      {this.renderList()}
      <div className="MidTitle">
            <h3>In case you missed it</h3>
            <hr />
            <br />
        </div>
        {this.renderList()}
     
      </div>
    );
  }
}

export default App;
