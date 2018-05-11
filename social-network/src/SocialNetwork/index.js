import React, { Component } from 'react';
import MissedArticles from './MissedArticles';
import YourArticles from './YourArticles';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';


class SocialNetwork extends Component {

    render(){
        return(
            <div>
                <div>
                    <YourArticles dataYourArticles={yourArticles} />
                </div>
                <br />
                <div>
                    <MissedArticles dataMissedArticles={missedArticles} />
                </div>
            </div>
        );
    }
}

export default SocialNetwork;