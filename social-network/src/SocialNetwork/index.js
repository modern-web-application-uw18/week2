import React, { Component } from 'react';
import MissedArticles from './MissedArticles';
import YourArticles from './YourArticles';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import './styles.css';



class SocialNetwork extends Component {

    render(){
        return(
            <div>
                <section><span>Your Articles</span>
                <div>
                    <YourArticles dataYourArticles={yourArticles} />
                </div>
                </section>
                <br />
                <section><span>Missed Articles</span>
                <div>
                    <MissedArticles dataMissedArticles={missedArticles} />
                </div>
                </section>
            </div>
        );
    }
}

export default SocialNetwork;