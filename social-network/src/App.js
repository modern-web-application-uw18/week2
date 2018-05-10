import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import Thumbs from './Thumbs';
import './App.css';

import Articles from './your-articles.json';
import Missed from './missed-articles.json'

class App extends Component {

    render() {
    return (
        <div className="App">
            <div className="container">
                <h4 className="left-align">For you</h4>
                <div className="divider"></div>
                    <div className="row">
                        {Articles.map((article, idx) => {
                            return <Card key={idx} article={article} />;
                        })}
                    </div>
                <p></p>
                <h4 className="left-align">In case you missed it</h4>
                <div className="divider"></div>
                    <div className="row">
                        {Missed.map((article, idx) => {
                            return <Thumbs key={idx} article={article} />;
                        })}
                    </div>
            </div>
        </div>
    );
  }
}

export default App;
