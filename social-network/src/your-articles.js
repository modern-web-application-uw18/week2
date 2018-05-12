import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.objectOf(PropTypes.number), 
    title: PropTypes.string,
    img: PropTypes.string,
}

class YourArticles extends Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "title": "The 7 Habits of Highly Creative People",
                        "description": "\"What a good artist understands is that nothing comes from nowhere. Nothing is completely original.\"",
                        "image": "https://cdn-images-1.medium.com/max/800/1*PIC-U670COEqmGwt4cvXAA.jpeg",
                        "link": "https://artplusmarketing.com/the-7-habits-of-highly-creative-people-6cfe6471af31",
                        "author": {
                            "name": "Louis Chew",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*NGHEMBPNbIQmmAkvCjaspA.jpeg",
                            "isMediumMember": true
                        },
                        "postedDate": "2018-04-04T07:00:00.000Z",
                        "minutesToRead": 8,
                        "hasAudioAvailable": false,
                        "memberPreview": false
                    },
                    {
                        "title": "This Handy Chart Automatically Generates a Pitch for Your New Novel",
                        "description": "Feeling stuck? We help you skip the writing and go straight to the press release",
                        "image": "https://cdn-images-1.medium.com/max/800/1*KHs6OgOb7_aJhmQvOKj_dg.jpeg",
                        "link": "https://electricliterature.com/how-to-write-elevator-pitch-novel-publicity-infographic-a8ec74ecf7ce",
                        "author": {
                            "name": "Electric Literature",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*bs47qwmiIR_bU01Jm6ZI9Q.jpeg",
                            "isMediumMember": false
                        },
                        "postedDate": "2018-03-28T07:00:00.000Z",
                        "minutesToRead": 2,
                        "hasAudioAvailable": false,
                        "memberPreview": false
                    },
                    {
                        "title": "Do Something You Can't Win At",
                        "description": "And make it something you love",
                        "image": "https://cdn-images-1.medium.com/max/800/1*cioT9CBBV2s0svet9LqKZA.png",
                        "link": "https://medium.com/@krisgage/do-something-you-cant-win-at-cb2e5d2ad3c1",
                        "author": {
                            "name": "Kris Gage",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*e7o4kbk8ofT6eKaLrO0jaw.png",
                            "isMediumMember": false
                        },
                        "postedDate": "2018-03-30T07:00:00.000Z",
                        "minutesToRead": 3,
                        "hasAudioAvailable": false,
                        "memberPreview": false
                    },
                    {
                        "title": "Art as a Second Language",
                        "description": "Drawing is a translation of all my voices and words — an attempt to draw nothing",
                        "image": "https://cdn-images-1.medium.com/max/800/1*_NTwW2r8Konom4d5vIPkuw.png",
                        "link": "https://medium.com/@bluebed/speaking-different-languages-through-art-710e0a992dd3",
                        "author": {
                            "name": "Roman Muradov",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/0*3PeNTwOh_hQpAuw0.png",
                            "isMediumMember": false
                        },
                        "postedDate": "2018-03-27T07:00:00.000Z",
                        "minutesToRead": 6,
                        "hasAudioAvailable": true,
                        "memberPreview": true
                    }
                ]
        }
    }
    render() {
        return (
             <div >
                {this.state.data.map((title, i) => <InnerContent key={i}
                    data={title} />)}
             </div>
         );
    }
}           
class InnerContent extends Component {
    render() {
        return (
            <div className ='container'>
                <a href={this.props.data.link}><img src={this.props.data.image} className='img' alt='Default article view'></img></a>
                <div className ='.article'>
                    <a href={this.props.data.link}><p className='title'>{this.props.data.title}</p></a>
                    <a href={this.props.data.link}><p className='fontLight uiScale'>{this.props.data.description}</p></a>
                </div>
                <div className ='aboutArticle'>
                    <img src={this.props.data.author.image} className='authorImg' alt='Profile for Author'></img>
                    <p className ='fontMedium'>{this.props.data.author.name}</p>
                </div>
            </div>
        );
    }
}

YourArticles.propTypes = propTypes;

export default YourArticles;

