import React, { Component } from 'react';
import './App.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import YourArticle from './YourArticle/YourArticle';
import MissedArticle from './MissedArticle/MissedArticle';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h4 className="App-header">For you</h4>
                <div className="App-container">
                    {yourArticles.map((yourArticle, key) => {
                        return <YourArticle key={key} yourArticle={yourArticle} />;
                    })}
                </div>
                <h4 className="App-header">In case you missed it</h4>
                <div className="App-container">
                    {missedArticles.map((missedArticle, key) => {
                        return <MissedArticle key={key} missedArticle={missedArticle} />;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
